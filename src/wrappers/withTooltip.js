import React, { Component } from 'react';
import TetherComponent from 'react-tether';

const withTooltip = (TooltipTrigger, TooltipContent) => (
  class Tooltip extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = { isOpen: false };
      this.toggleTooltip = this.toggleTooltip.bind(this);
      this.showTooltip = this.showTooltip.bind(this);
      this.hideTooltip = this.hideTooltip.bind(this);
      this.handleDocumentClick = this.handleDocumentClick.bind(this);
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
      const { ...supplied } = this.props;
      const { toggleTooltip, showTooltip, hideTooltip } = this;
      const props = { isOpen, toggleTooltip, showTooltip, hideTooltip, ...supplied };

      return (
        <TetherComponent attachment="top left" targetAttachment="bottom left">
          <TooltipTrigger {...props} />
          {isOpen ? <TooltipContent {...props} /> : null}
        </TetherComponent>
      );
    }
  }
);

export default withTooltip;
