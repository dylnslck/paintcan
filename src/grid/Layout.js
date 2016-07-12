import 'flexboxgrid';
import React, { PropTypes } from 'react';

const Layout = ({ children }) => <div>{children}</div>;

Layout.propTypes = {
  children: PropTypes.any, // TODO: proper validation (should be container only?)
};

export default Layout;
