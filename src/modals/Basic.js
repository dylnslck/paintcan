import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import { Icon } from 'react-fa';
import cx from 'classnames';
import Card from '../cards/Card';
import styles from './styles.scss';

const BasicModal = ({ title, size, children }, { onToggleModal }) => (
  <Motion
    defaultStyle={{ translateY: -30 }}
    style={{ translateY: spring(0) }}
  >
    {interpolated =>
      <div
        className={cx(styles.basic, styles[size])}
        style={{ transform: `translateY(${interpolated.translateY}px)` }}
      >
        <Card>
          <div className={styles.header}>
            {title}
            <span className={styles.close} onClick={onToggleModal}>
              <Icon name="times" />
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
  onToggleModal: PropTypes.func,
};

export default BasicModal;
