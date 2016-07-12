import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import { TransitionMotion, spring } from 'react-motion';
import TetherComponent from 'react-tether';
import { Trigger, Content } from '../utils';

const DropdownTransition = ({ children: child }) => {
  // FIXME: add some damping and stifness presets
  const gentleBounce = { stiffness: 200, damping: 10 };
  const willEnter = () => ({ opacity: 0, translateY: 4 });
  const willLeave = () => ({ opacity: spring(0), translateY: spring(4, gentleBounce) });
  const getStyles = () => ({ opacity: spring(1), translateY: spring(0, gentleBounce) });
  const transitionStyles = child ? [{ key: 'dropdown', style: getStyles(), data: child }] : [];

  return (
    <TransitionMotion
      willEnter={willEnter}
      willLeave={willLeave}
      styles={transitionStyles}
    >
      {interpolated =>
        <span>
          {interpolated.map(({ key, style, data }) =>
            cloneElement(data, {
              key,
              style: {
                opacity: style.opacity,
                transform: `translateY(${style.translateY}px)`,
              },
            })
          )}
        </span>
      }
    </TransitionMotion>
  );
};

DropdownTransition.propTypes = {
  children: PropTypes.any, // FIXME: proper validation
};

class Dropdown extends Component {
  static propTypes = {
    text: PropTypes.string,
    attachment: PropTypes.string, // TODO: oneOf[... full list of options]
    targetAttachment: PropTypes.string, // TODO: oneOf[... full list of options]
    offset: PropTypes.string,
    children: PropTypes.any, // TODO: proper validation (single element)
  }

  static defaultProps = {
    attachment: 'top left',
    targetAttachment: 'bottom left',
    offset: '0 0',
  }

  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
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

    Children.forEach(children, child => {
      const handleRef = (key) => (ref) => {
        this[key] = ref;
      };

      if (child.type === Trigger) {
        this.trigger = (
          <div ref={handleRef('triggerNode')} style={{ display: 'inline-block' }}>
            {child.props.children}
          </div>
        );
      }

      if (child.type === Content) {
        this.content = (
          <div ref={handleRef('contentNode')}>
            {child}
          </div>
        );
      }
    });
  }

  handleDocumentClick(e) {
    const { target } = e;
    const content = findDOMNode(this.contentNode);
    const trigger = findDOMNode(this.triggerNode);

    // ref hasn't completed firing due to the animation
    if (!content) return;

    const shouldHideDropdown = (
      trigger !== target &&
      !trigger.contains(target) &&
      content !== target &&
      !content.contains(target)
    );

    if (shouldHideDropdown) this.hideDropdown();
  }

  showDropdown() {
    this.setState({ isOpen: true });
  }

  hideDropdown() {
    this.setState({ isOpen: false });
  }

  toggleDropdown() {
    return this.state.isOpen
      ? this.hideDropdown()
      : this.showDropdown();
  }

  renderTrigger() {
    return cloneElement(this.trigger, { onClick: this.toggleDropdown });
  }

  renderDropdown() {
    const { isOpen } = this.state;
    const content = this.content;

    return (
      <DropdownTransition>
        {isOpen ? <div>{content}</div> : null}
      </DropdownTransition>
    );
  }

  render() {
    const { attachment, targetAttachment, offset } = this.props;

    return (
      <TetherComponent
        attachment={attachment}
        targetAttachment={targetAttachment}
        offset={offset}
      >
        {this.renderTrigger()}
        {this.renderDropdown()}
      </TetherComponent>
    );
  }
}

export default Dropdown;
