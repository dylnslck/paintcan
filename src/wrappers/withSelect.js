import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import TetherComponent from 'react-tether';
import { Trigger, Content } from '../utils';

const withSelect = (SelectTrigger, SelectContent) => (
  class Select extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = { isOpen: false, item: null };
      this.toggleSelect = this.toggleSelect.bind(this);
      this.showSelect = this.showSelect.bind(this);
      this.hideSelect = this.hideSelect.bind(this);
      this.onSelect = this.onSelect.bind(this);
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

      const shouldHideSelect = (
        trigger !== target &&
        !trigger.contains(target) &&
        content !== target &&
        !content.contains(target)
      );

      if (shouldHideSelect) this.hideSelect();
    }

    showSelect() {
      this.setState({ isOpen: true });
    }

    hideSelect() {
      this.setState({ isOpen: false });
    }

    toggleSelect() {
      return this.state.isOpen
        ? this.hideSelect()
        : this.showSelect();
    }

    onSelect(item) {
      this.setState({ item });
    }

    render() {
      const { isOpen, item } = this.state;
      const { ...supplied } = this.props;
      const { toggleSelect, showSelect, hideSelect, onSelect } = this;
      const props = { isOpen, item, toggleSelect, showSelect, hideSelect, onSelect, ...supplied };

      const createRef = (key) => (ref) => {
        this[key] = findDOMNode(ref);
      };

      const trigger = (
        <Trigger ref={createRef('trigger')}>
          <SelectTrigger {...props} />
        </Trigger>
      );

      const content = (
        <Content ref={createRef('content')}>
          <SelectContent {...props} />
        </Content>
      );

      // FIXME: move zIndex to global registry somewhere
      return (
        <TetherComponent
          attachment="top left"
          targetAttachment="bottom left"
          style={{ zIndex: 1100 }}
        >
          {trigger}
          {isOpen ? content : null}
        </TetherComponent>
      );
    }
  }
);

export default withSelect;
