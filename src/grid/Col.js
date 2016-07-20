import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './styles.scss';
import {
  mapSizeToClassName,
  mapOffsetToClassName,
  mapAlignmentToClassName,
  mapDistributionToClassName,
} from './utils';

const Col = ({
  full,
  size,
  offset,
  align,
  distribute,
  className,
  style,
  children,
}) => {
  const offsetClassName = mapOffsetToClassName(offset);
  const sizeClassName = mapSizeToClassName(size);
  const alignmentClassName = mapAlignmentToClassName(align);
  const distributionClassName = mapDistributionToClassName(distribute);
  const fullClassName = { [styles.full]: full };

  // TODO: write validation function to ensure 'sizes' is a valid object
  return (
    <div
      style={style}
      className={cx(
        fullClassName,
        distributionClassName,
        alignmentClassName,
        offsetClassName,
        sizeClassName,
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
  align: PropTypes.object,
  distribute: PropTypes.object,
  size: PropTypes.object, // TODO: super important shape validation
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any, // TODO: prop validation (only col?)
};

Col.defaultProps = {
  full: false,
  offset: {},
  align: {},
  distribute: {},
  size: {
    xs: 12,
  },
};

export default Col;
