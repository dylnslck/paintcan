import React, { Component, PropTypes } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Backdrop } from '../backdrops';

const withModal = (Trigger, Content) => (
  class Modal extends Component {
    static propTypes = {
      closeOnBackdropClick: PropTypes.bool,
    }

    constructor(props, context) {
      super(props, context);

      this.state = { isOpen: false };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.renderBackdrop = this.renderBackdrop.bind(this);
    }

    openModal() {
      document.body.style.overflowY = 'hidden';
      this.setState({ isOpen: true });
    }

    closeModal() {
      document.body.style.overflowY = 'auto';
      this.setState({ isOpen: false });
    }

    toggleModal() {
      return this.state.isOpen
        ? this.closeModal()
        : this.openModal();
    }

    componentDidMount() {
      this.container = document.createElement('div');
      document.body.appendChild(this.container);

      this.renderBackdrop();
    }

    componentDidUpdate() {
      this.renderBackdrop();
    }

    componentWillUnmount() {
      const { container } = this;
      unmountComponentAtNode(container);
      document.body.removeChild(container);
    }

    renderBackdrop() {
      const { isOpen } = this.state;
      const { openModal, closeModal, toggleModal, container } = this;
      const { closeOnBackdropClick, ...supplied } = this.props;
      const props = { isOpen, openModal, closeModal, toggleModal, ...supplied };

      const content = <Content {...props} />;
      const handleBackdropClick = () => closeOnBackdropClick && closeModal();

      const backdrop = (
        <Backdrop active={isOpen} onClick={handleBackdropClick}>
          {content}
        </Backdrop>
      );

      this.content = content;
      this.backdrop = backdrop;

      render(backdrop, container);
    }

    render() {
      const { isOpen } = this.state;
      const { openModal, closeModal, toggleModal } = this;
      const { ...supplied } = this.props;
      const props = { isOpen, openModal, closeModal, toggleModal, ...supplied };

      return (
        <Trigger {...props} />
      );
    }
  }
);

export default withModal;
