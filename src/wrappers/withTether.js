import React, { Component, PropTypes } from 'react';
import TetherComponent from 'react-tether';

const withTether = (TooltipTrigger, TooltipContent) => (
  class Tether extends Component {
    static propTypes = {
      attachment: PropTypes.string, // TODO: proper validation
      targetAttachment: PropTypes.string, // TODO: proper validation
      offset: PropTypes.string, // TODO: proper validation
    }

    static defaultTypes = {
      attachment: 'top left',
      targetAttachment: 'bottom left',
      offset: '0 0',
    }

    constructor(props, context) {
      super(props, context);

      this.state = { isOpen: false };
      this.toggleTooltip = this.toggleTooltip.bind(this);
      this.showTooltip = this.showTooltip.bind(this);
      this.hideTooltip = this.hideTooltip.bind(this);
    }

    showTooltip() {
      this.setState({ isOpen: true });
    }

    hideTooltip() {
      this.setState({ isOpen: false });
    }

    toggleTooltip() {
      return this.state.isOpen
        ? this.hideTooltip()
        : this.showTooltip();
    }

    render() {
      const { isOpen } = this.state;
      const { attachment, targetAttachment, offset, ...supplied } = this.props;
      const { toggleTooltip, showTooltip, hideTooltip } = this;
      const props = { isOpen, toggleTooltip, showTooltip, hideTooltip, ...supplied };

      return (
        <TetherComponent
          attachment={attachment}
          targetAttachment={targetAttachment}
          offset={offset}
          style={{ zIndex: 1100 }}
        >
          <TooltipTrigger {...props} />
          {isOpen ? <TooltipContent {...props} /> : null}
        </TetherComponent>
      );
    }
  }
);

export default withTether;
