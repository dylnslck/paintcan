import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

const Row = ({
  full,
  reverse,
  align,
  distribute,
  children,
}) => {
  const mapAlignmentsToClassNames = () =>
    Object.keys(align).map(alignment =>
      align[alignment].split(' ').map(a =>
        `${a}-${alignment}`).join(' '));

  /*
  {
    align: {
      xs: 'center middle',
    }
  }
  */

  const mapDistributionsToClassNames = () =>
    Object.keys(distribute).map(distribution =>
      `${distribute[distribution]}-${distribution}`);

  const classNames = cx(
    mapAlignmentsToClassNames(),
    mapDistributionsToClassNames(),
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
  children: PropTypes.any, // TODO: prop validation (only col?)
};

Row.defaultProps = {
  full: false,
  align: {},
  distribute: {},
};

export default Row;
