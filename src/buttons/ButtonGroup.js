import React, { PropTypes } from 'react';
import Button from './Button';
import styles from './styles.scss';
import cx from 'classnames';

const ButtonGroup = ({ spaced, children }) => {
  const classNames = cx(styles.group, {
    [styles.spaced]: spaced,
    [styles.grouped]: !spaced,
  });

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  spaced: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(Button),
    PropTypes.array,
  ]),
};

ButtonGroup.defaultProps = {
  spaced: false,
};

export default ButtonGroup;
