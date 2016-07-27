/* eslint-disable no-alert */
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Icon } from 'react-fa';
import fuzzy from 'fuzzy';
import { trigger, content, caret, item, remove, info } from './styles.scss';


import {
  Button,
  Card,
  Col,
  Container,
  Row,
  withTether,
} from '../../src';

class SelectTrigger extends Component {
  static propTypes = {
    updateState: PropTypes.func,
    toggleTether: PropTypes.func,
    showTether: PropTypes.func,
    hideTether: PropTypes.func,
    isOpen: PropTypes.bool,
    placeholder: PropTypes.string,
    selection: PropTypes.object,
    multiple: PropTypes.bool,
    triggerRef: PropTypes.object,
    contentRef: PropTypes.object,
  }

  static defaultProps = {
    placeholder: 'Select',
  }

  constructor(props) {
    super(props);

    this.state = { value: '' }; // FIXME: default selection
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.mapPropsToStyle = this.mapPropsToStyle.bind(this);
    this.renderSelection = this.renderSelection.bind(this);
  }

  componentDidMount() {
    if (this.props.multiple) {
      document.addEventListener('click', this.handleDocumentClick, false);
    }

    // FIXME: hacky and doesn't look quite right on Firefox and Safari
    this.props.updateState({
      width: this.trigger.getBoundingClientRect().width - 0.5,
    });
  }

  componentWillReceiveProps(newProps) {
    const { selection } = this.props;
    const { selection: newSelection } = newProps;

    if (newSelection && selection !== newSelection) {
      this.setState({ value: '' });
    }
  }

  componentWillUnmount() {
    if (this.props.multiple) {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });

    this.props.updateState({
      query: e.target.value,
    });
  }

  handleClick() {
    const { input } = this;

    if (input !== document.activeElement) {
      input.focus();
    }

    this.props.toggleTether();
  }

  handleFocus() {
    const { showTether, isOpen } = this.props;

    if (!isOpen) {
      showTether();
    }
  }

  handleKeyDown(e) {
    if (!this.props.isOpen) {
      this.props.showTether();
    }

    if (e.key === 'Backspace' && !this.state.value) {
      this.props.updateState({ selection: null });
    }
  }

  mapPropsToStyle() {
    return this.props.isOpen
      ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }
      : {};
  }

  renderSelection() {
    const { selection, updateState, multiple } = this.props;

    if (selection) {
      if (!multiple) {
        return (
          <span>{selection.value}</span>
        );
      }

      return (
        <span className={item}>
          {selection.value}
          <Icon
            name="close"
            className={remove}
            onClick={() => updateState({ selection: null })}
          />
        </span>
      );
    }

    return null;
  }

  render() {
    const { isOpen, placeholder } = this.props;

    return (
      <div
        className={trigger}
        ref={ref => (this.trigger = ref)}
        style={this.mapPropsToStyle()}
        onClick={this.handleClick}
      >
        {this.renderSelection()}
        <input
          type="text"
          placeholder={this.props.selection ? '' : placeholder}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          ref={ref => (this.input = ref)}
          style={{ marginLeft: this.props.selection ? '0.5rem' : 0 }}
        />
        <Icon
          name={isOpen ? 'caret-up' : 'caret-down'}
          className={caret}
          fixedWidth
        />
      </div>
    );
  }
}


const Select = withTether(
  ({ ...props }) => (
    <SelectTrigger {...props} />
  ),
  ({ options, selection, width, updateState, query = '' }) => {
    const handleClick = (option) => updateState({ selection: option, query: '' });

    const filterOutSelection = options.filter(option => {
      if (selection && option.id === selection.id) return false;
      return true;
    });

    const filterQueryMatch = fuzzy.filter(query, filterOutSelection, {
      pre: '&lt;em&gt;',
      post: '&lt;/em&gt;',
      extract: el => el.value,
    }).map(option => ({
      id: option.original.id,
      value: option.original.value,
      highlighted: option.string,
    }));

    const renderOptions = () => {
      if (filterQueryMatch.length) {
        return filterQueryMatch.map(option =>
          <li key={option.id} onClick={() => handleClick(option)}>
            {option.value}
          </li>
        );
      }

      return (
        <li>
          Nothing matched {`'${query}'`}
        </li>
      );
    };

    return (
      <div className={content} style={{ width }}>
        <ul>
          {renderOptions()}
        </ul>
      </div>
    );
  }
);

const options = [{
  id: '1',
  value: 'Pizza',
}, {
  id: '2',
  value: 'Mexican',
}, {
  id: '3',
  value: 'Asian',
}];

const TethersDemo = () => (
  <Container>
    <Row>
      <Col size={{ lg: 4 }} offset={{ lg: 4 }}>
        <Select options={options} placeholder="Select some food" />
      </Col>
    </Row>
  </Container>
);

export default TethersDemo;
