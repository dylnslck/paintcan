import React, { Component, PropTypes } from 'react';
import TetherComponent from 'react-tether';
import { Trigger, Content } from '../utils';

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
      this.updateState = this.updateState.bind(this);
      this.renderTrigger = this.renderTrigger.bind(this);
      this.renderContent = this.renderContent.bind(this);
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

    updateState(nextState) {
      this.setState(nextState);
    }

    renderTrigger(props) {
      return (
        <Trigger ref={ref => (this.triggerRef = ref)}>
          <TetherTrigger {...props} />
        </Trigger>
      );
    }

    renderContent(props) {
      if (this.state.isOpen) {
        return (
          <Content ref={ref => (this.contentRef = ref)}>
            <TetherContent {...props} />
          </Content>
        );
      }

      return null;
    }

    render() {
      const { toggleTether, showTether, hideTether, updateState, triggerRef, contentRef } = this;
      const { attachment, targetAttachment, offset } = this.props;

      const props = {
        toggleTether,
        showTether,
        hideTether,
        updateState,

        triggerRef,
        contentRef,

        ...this.props,
        ...this.state,
      };

      return (
        <TetherComponent
          attachment={attachment}
          targetAttachment={targetAttachment}
          offset={offset}
          style={{ zIndex: 1100 }}
        >
          {this.renderTrigger(props)}
          {this.renderContent(props)}
        </TetherComponent>
      );
    }
  }
);

export default withTether;
