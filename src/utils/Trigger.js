import { Component, PropTypes, cloneElement } from 'react';

class Trigger extends Component {
  static propTypes = {
    children: PropTypes.any, // TODO: proper validation (single element)
  }

  render() {
    const { children, ...options } = this.props;

    return cloneElement(children, { ...options });
  }
}

export default Trigger;
