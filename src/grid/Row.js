import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './styles.scss';
import { mapAlignmentToClassName, mapDistributionToClassName } from './utils';

const Row = ({
  full,
  reverse,
  align,
  distribute,
  children,
  className,
}) => {
  const alignmentClassName = mapAlignmentToClassName(align);
  const distributionClassName = mapDistributionToClassName(distribute);

  const classNames = cx(
    className,
    alignmentClassName,
    distributionClassName,
    'row',
    {
      reverse,
      [styles.full]: full,
    },
  );

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

Row.propTypes = {
  full: PropTypes.bool,
  reverse: PropTypes.bool,
  align: PropTypes.object,
  distribute: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
};

Row.defaultProps = {
  full: false,
  align: {},
  distribute: {},
};

export default Row;
