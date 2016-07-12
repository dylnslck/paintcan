import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

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
