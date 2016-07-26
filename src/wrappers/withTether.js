import React, { Component, PropTypes } from 'react';
import TetherComponent from 'react-tether';

const withTether = (TetherTrigger, TetherContent) => (
  class Tether extends Component {
    static propTypes = {
      attachment: PropTypes.string, // TODO: proper validation
      targetAttachment: PropTypes.string, // TODO: proper validation
      offset: PropTypes.string, // TODO: proper validation
    }

    static defaultProps = {
      attachment: 'top left',
      targetAttachment: 'bottom left',
      offset: '0 0',
    }

    constructor(props, context) {
      super(props, context);

      this.state = { isOpen: false };
      this.toggleTether = this.toggleTether.bind(this);
      this.showTether = this.showTether.bind(this);
      this.hideTether = this.hideTether.bind(this);
    }

    showTether() {
      this.setState({ isOpen: true });
    }

    hideTether() {
      this.setState({ isOpen: false });
    }

    toggleTether() {
      return this.state.isOpen
        ? this.hideTether()
        : this.showTether();
    }

    render() {
      const { isOpen } = this.state;
      const { attachment, targetAttachment, offset, ...supplied } = this.props;
      const { toggleTether, showTether, hideTether } = this;
      const props = { isOpen, toggleTether, showTether, hideTether, ...supplied };

      return (
        <TetherComponent
          attachment={attachment}
          targetAttachment={targetAttachment}
          offset={offset}
          style={{ zIndex: 1100 }}
        >
          <TetherTrigger {...props} />
          {isOpen ? <TetherContent {...props} /> : null}
        </TetherComponent>
      );
    }
  }
);

export default withTether;
