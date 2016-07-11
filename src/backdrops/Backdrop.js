import React, { PropTypes, cloneElement } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import styles from './styles.scss';

const BackdropTransition = ({ children: child }) => {
  const willEnter = () => ({ opacity: 0 });
  // FIXME: add some damping and stifness presets
  const willLeave = () => ({ opacity: spring(0, { stiffness: 700, damping: 50 }) });
  const getStyles = () => ({ opacity: spring(1, { stiffness: 200, damping: 20 }) });
  const transitionStyles = child ? [{ key: 'modal', style: getStyles(), data: child }] : [];

  return (
    <TransitionMotion
      willEnter={willEnter}
      willLeave={willLeave}
      styles={transitionStyles}
    >
      {interpolated =>
        // FIXME: So hacky
        <span style={{ position: 'absolute', zIndex: 900 }}>
          {interpolated.map(({ key, style, data }) =>
            cloneElement(data, { key, style })
          )}
        </span>
      }
    </TransitionMotion>
  );
};

const Backdrop = ({ active, onClick, children }) => (
  <BackdropTransition>
    {active
      ? <div className={styles.backdrop} onClick={onClick}>{children}</div>
      : null
    }
  </BackdropTransition>
);

BackdropTransition.propTypes = {
  children: PropTypes.any,
};

Backdrop.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default Backdrop;
