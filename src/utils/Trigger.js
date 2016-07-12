import React, { PropTypes } from 'react';

const Target = ({ children }) => <span>{children}</span>;

Target.propTypes = {
  children: PropTypes.any,
};

export default Target;
