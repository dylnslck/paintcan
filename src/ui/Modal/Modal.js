import React, { Component, PropTypes, cloneElement } from 'react';
import Backdrop from '../../backdrops/Backdrop';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = { active: props.active || false };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
  }

  getChildContext() {
    return { onCloseModal: this.closeModal };
  }

  openModal() {
    document.body.style.overflow = 'hidden';
    this.setState({ active: true });
  }

  closeModal() {
    document.body.style.overflow = 'auto';
    this.setState({ active: false });
  }

  handleBackdropClick(e) {
    e.persist();

    // FIXME: this is pretty frail
    return e.target.className.indexOf('backdrop') >= 0
      ? this.closeModal()
      : null;
  }

  render() {
    const { active } = this.state;
    const { target, children } = this.props;

    return (
      <span>
        {cloneElement(target, { onClick: this.openModal })}
        <Backdrop active={active} onClick={this.handleBackdropClick}>
          {children}
        </Backdrop>
      </span>
    );
  }
}

Modal.childContextTypes = {
  onCloseModal: PropTypes.func,
};

Modal.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.any, // TODO: proper validation
  children: PropTypes.any,
};

Modal.defaultProps = {
  size: 'md',
  title: 'Title',
};

export default Modal;
