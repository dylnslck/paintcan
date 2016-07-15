import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

const Col = ({ full, size, offset, className, style, children }) => {
  const mapSizeToClassName = () =>
    Object.keys(size).map(s => `col-${s}-${size[s]}`);

  const mapOffsetToClassName = () =>
    Object.keys(offset).map(o => `col-${o}-offset-${offset[o]}`);

  // TODO: write validation function to ensure 'sizes' is a valid object
  return (
    <div
      style={style}
      className={cx(
        mapOffsetToClassName(),
        mapSizeToClassName(),
        { [styles.full]: full },
        className,
      )}
    >
      {children}
    </div>
  );
};

Col.propTypes = {
  full: PropTypes.bool,
  offset: PropTypes.object,
  size: PropTypes.object, // TODO: super important shape validation
  className: PropTypes.string,
  style: PropTypes.string,
  children: PropTypes.any, // TODO: prop validation (only col?)
};

Col.defaultProps = {
  full: false,
  offset: {},
  size: {
    xs: 12,
  },
};

export default Col;
