import { Component, PropTypes } from 'react';

class Trigger extends Component {
  static propTypes = {
    children: PropTypes.any, // TODO: proper validation (single element)
  }

  render() {
    return this.props.children;
  }
}

export default Trigger;
