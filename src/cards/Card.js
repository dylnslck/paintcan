import React, { PropTypes } from 'react';
import styles from './styles.scss';
import cx from 'classnames';

const Card = ({ children, className }) => (
  <div className={cx(styles.card, className)}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Card;
