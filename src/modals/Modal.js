import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import { Backdrop } from '../backdrops';
import { Content, Trigger } from '../utils';

class Modal extends Component {
  static propTypes = {
    active: PropTypes.bool,
    size: PropTypes.string,
    title: PropTypes.string,
    target: PropTypes.any, // TODO: proper validation
    children: PropTypes.any,
  }

  static defaultProps = {
    active: false,
    size: 'md',
    title: 'Title',
  }

  static childContextTypes = {
    onCloseModal: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = { active: props.active || false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  getChildContext() {
    return { onCloseModal: this.closeModal };
  }

  componentWillMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    this.setupTriggerAndContent();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  setupTriggerAndContent() {
    const { children } = this.props;

    const createRef = (key) => (ref) => {
      this[key] = findDOMNode(ref);
    };

    Children.forEach(children, child => {
      if (child.type === Trigger) {
        this.trigger = cloneElement(child, {
          ref: createRef('triggerNode'),
          onClick: this.openModal,
        });
      }

      if (child.type === Content) {
        this.content = cloneElement(child, {
          ref: createRef('contentNode'),
        });
      }
    });
  }

  openModal() {
    document.body.style.overflow = 'hidden';
    this.setState({ active: true });
  }

  closeModal() {
    document.body.style.overflow = 'auto';
    this.setState({ active: false });
  }

  handleDocumentClick(e) {
    const { target } = e;
    const { contentNode: content } = this;

    if (!content) return;

    const shouldHideBackdrop = (
      content !== target &&
      !content.contains(target)
    );

    if (shouldHideBackdrop) this.closeModal();
  }

  render() {
    const { active } = this.state;
    const { trigger, content } = this;

    return (
      <span>
        {trigger}
        <Backdrop active={active}>
          {content}
        </Backdrop>
      </span>
    );
  }
}

export default Modal;
