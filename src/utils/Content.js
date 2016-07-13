import React, { Component, PropTypes } from 'react';

class Content extends Component {
  static propTypes = {
    children: PropTypes.any, // TODO: proper validation (single element)
  }

  render() {
    const { children } = this.props;

    return Array.isArray(children)
      ? <div>{children}</div>
      : children;
  }
}

export default Content;
