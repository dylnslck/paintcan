import React, { PropTypes } from 'react';

const Content = ({ children }) => <span>{children}</span>;

Content.propTypes = {
  children: PropTypes.any,
};

export default Content;
