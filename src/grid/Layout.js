import 'flexboxgrid';
import React, { PropTypes } from 'react';

const Layout = ({ children }) => <div>{children}</div>;

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
