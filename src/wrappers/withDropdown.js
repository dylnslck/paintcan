import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import TetherComponent from 'react-tether';
import { Trigger, Content } from '../utils';

const withDropdown = (DropdownTrigger, DropdownContent) => (
  class Dropdown extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = { isOpen: false };
      this.toggleDropdown = this.toggleDropdown.bind(this);
      this.showDropdown = this.showDropdown.bind(this);
      this.hideDropdown = this.hideDropdown.bind(this);
      this.handleDocumentClick = this.handleDocumentClick.bind(this);
    }

    componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick, false);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick);
    }

    handleDocumentClick(e) {
      const { trigger, content } = this;
      const { target } = e;

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

    render() {
      const { isOpen } = this.state;
      const { ...supplied } = this.props;
      const { toggleDropdown, showDropdown, hideDropdown } = this;
      const props = { isOpen, toggleDropdown, showDropdown, hideDropdown, ...supplied };

      const createRef = (key) => (ref) => {
        this[key] = findDOMNode(ref);
      };

      const trigger = (
        <Trigger ref={createRef('trigger')}>
          <DropdownTrigger {...props} />
        </Trigger>
      );

      const content = (
        <Content ref={createRef('content')}>
          <DropdownContent {...props} />
        </Content>
      );

      return (
        <TetherComponent attachment="top left" targetAttachment="bottom left">
          {trigger}
          {isOpen ? content : null}
        </TetherComponent>
      );
    }
  }
);

export default withDropdown;
