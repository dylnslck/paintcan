import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

const Card = (props) => {
  const { children, className, ...options } = props;

  return (
    <div className={cx(styles.card, className)} {...options}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Card;
