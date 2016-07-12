import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

const Col = ({ full, sizes, offsets, children }) => {
  const mapSizesToClassName = () =>
    Object.keys(sizes).map(size => `col-${size}-${sizes[size]}`);

  const mapOffsetsToClassName = () =>
    Object.keys(offsets).map(offset => `col-${offset}-offset-${offsets[offset]}`);

  // TODO: write validation function to ensure 'sizes' is a valid object
  return (
    <div
      className={cx(
        mapOffsetsToClassName(),
        mapSizesToClassName(),
        { [styles.full]: full },
      )}
    >
      {children}
    </div>
  );
};

Col.propTypes = {
  full: PropTypes.bool,
  offsets: PropTypes.object,
  sizes: PropTypes.object, // TODO: super important shape validation
  children: PropTypes.any, // TODO: prop validation (only col?)
};

Col.defaultProps = {
  full: false,
  offsets: {},
  sizes: {
    xs: 12,
  },
};

export default Col;
