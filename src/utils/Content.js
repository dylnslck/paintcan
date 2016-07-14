import React, { Component, PropTypes, cloneElement } from 'react';

class Content extends Component {
  static propTypes = {
    children: PropTypes.any, // TODO: proper validation (single element)
  }

  render() {
    const { children, ...options } = this.props;

    const content = Array.isArray(children)
      ? <div>{children}</div>
      : children;

    const cloned = cloneElement(content, { ...options });

    return cloned;
  }
}

export default Content;
