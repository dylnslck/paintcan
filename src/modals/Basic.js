import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import cx from 'classnames';
import Card from '../cards/Card';
import styles from './styles.scss';

const BasicModal = ({ title, size, children }, { onCloseModal }) => (
  <Motion
    defaultStyle={{ translateY: -30, scale: 1.02 }}
    style={{ translateY: spring(0), scale: spring(1) }}
  >
    {interpolated =>
      <div
        className={cx(styles.basic, styles[size])}
        style={{
          transform: `translateY(${interpolated.translateY}px) scale(${interpolated.scale})`,
        }}
      >
        <Card>
          <div className={styles.header}>
            {title}
            <span className={styles.close} onClick={onCloseModal}>
              &times;
            </span>
          </div>
          <div className={styles.body}>
            {children}
          </div>
        </Card>
      </div>
    }
  </Motion>
);

BasicModal.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.any,
};

BasicModal.defaultProps = {
  size: 'md',
};

BasicModal.contextTypes = {
  onCloseModal: PropTypes.func,
};

export default BasicModal;
