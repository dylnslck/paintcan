import React, { PropTypes, cloneElement, createElement } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

const Button = ({
  color,
  outline,
  circle,
  loading,
  disabled,
  block,
  size,
  icon,
  tag,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const base = outline ? styles[`${color}-outline`] : styles[color];

  const props = {
    disabled,
    onClick,
    onMouseEnter,
    onMouseLeave,
    className: cx(base, styles[size], {
      [styles.circle]: circle,
      [styles.loading]: loading,
      [styles.block]: block,
    }),
  };

  const renderChildren = () => (
    <span className={styles.children}>
      {
        // only apply icon class if there are children
        icon ? cloneElement(icon, { className: children && styles.icon }) : ''
      }
      {children}
    </span>
  );

  return createElement(tag, props, renderChildren());
};

Button.propTypes = {
  color: PropTypes.string,
  outline: PropTypes.bool,
  circle: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  size: PropTypes.string,
  icon: PropTypes.any, // TODO: add validation
  tag: PropTypes.string,
  children: PropTypes.any, // TODO: add validation
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'secondary',
  outline: false,
  circle: false,
  loading: false,
  disabled: false,
  block: false,
  size: 'md',
  tag: 'button',
};

export default Button;
