import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

const Container = ({ fluid, full, style, children }) => {
  const classNames = cx({
    container: !fluid,
    'container-fluid': fluid,
    [styles.full]: full,
  });

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  fluid: PropTypes.bool,
  full: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.any, // TODO: proper validation (cols only or row?)
};

Container.defaultProps = {
  fluid: false,
  full: false,
};

export default Container;
