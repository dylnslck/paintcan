import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup } from '../buttons';
import styles from './styles.scss';

class ConfirmModal extends Component {
  static propTypes = {
    title: PropTypes.string,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
  }

  static contextTypes = {
    onCloseModal: PropTypes.func,
  }

  static defaultProps = {
    confirmText: 'Yes',
    cancelText: 'No',
  }

  constructor(props) {
    super(props);

    this.state = { isConfirming: false };
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm() {
    const { onConfirm } = this.props;
    const { onCloseModal } = this.context;

    this.setState({ isConfirming: true });
    onConfirm().then(() => {
      this.setState({ isConfirming: false });
      onCloseModal();
    });
  }

  renderConfirmButton() {
    const { confirmText } = this.props;
    const { isConfirming } = this.state;
    const color = 'success';

    const loadingButton = <Button color={color} loading>{confirmText}</Button>;
    const normalButton = <Button color={color} onClick={this.handleConfirm}>{confirmText}</Button>;

    return isConfirming ? loadingButton : normalButton;
  }

  render() {
    const { title, cancelText } = this.props;
    const { onCloseModal } = this.context;

    return (
      <div className={styles.confirm}>
        <h3>{title}</h3>
        <ButtonGroup spaced>
          {this.renderConfirmButton()}
          <Button color="danger" onClick={onCloseModal}>{cancelText}</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default ConfirmModal;
