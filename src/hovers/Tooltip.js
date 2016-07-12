import React, { Component, PropTypes, cloneElement } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import TetherComponent from 'react-tether';
import styles from './styles.scss';

const TooltipTransition = ({ children: child }) => {
  // FIXME: add some damping and stifness presets
  // FIXME: hovering over popover then immediately going to tooltip doesn't render on first try
  const gentleBounce = { stiffness: 200, damping: 10 };
  const willEnter = () => ({ opacity: 0, translateY: 4 });
  const willLeave = () => ({ opacity: spring(0), translateY: spring(4, gentleBounce) });
  const getStyles = () => ({ opacity: spring(1), translateY: spring(0, gentleBounce) });

  const defaultStyles = [{ key: 'tooltip', style: { opacity: 0, translateY: 0 }, data: child }];
  const transitionStyles = child ? [{ key: 'tooltip', style: getStyles(), data: child }] : [];

  return (
    <TransitionMotion
      defaultStyles={defaultStyles}
      willEnter={willEnter}
      willLeave={willLeave}
      styles={transitionStyles}
    >
      {interpolated =>
        <span>
          {interpolated.map(({ key, style, data }) => {
            const props = {
              key,
              style: {
                opacity: style.opacity,
                transform: `translateY(${style.translateY}px)`,
              },
            };

            return data ? cloneElement(data, props) : null;
          })}
        </span>
      }
    </TransitionMotion>
  );
};

TooltipTransition.propTypes = {
  children: PropTypes.any, // FIXME: proper validation
};

class Tooltip extends Component {
  static propTypes = {
    text: PropTypes.string,
    attachment: PropTypes.string, // TODO: oneOf[... full list of options]
    offset: PropTypes.string,
    children: PropTypes.any, // TODO: proper validation (single element)
  }

  static defaultProps = {
    attachment: 'bottom center',
    offset: '2px 0',
  }

  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  showTooltip() {
    this.setState({ isOpen: true });
  }

  hideTooltip() {
    this.setState({ isOpen: false });
  }

  renderTarget() {
    const { children } = this.props;

    // adding a little delay gets rid of some small glitches
    const handleMouseEnter = () => setTimeout(this.showTooltip, 50);
    const handleMouseLeave = this.hideTooltip;

    return cloneElement(children, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    });
  }

  renderTooltip() {
    const { text } = this.props;
    const { isOpen } = this.state;

    const handleMouseLeave = this.handleMouseLeave;

    return (
      <TooltipTransition>
        {isOpen
          ? <div className={styles.tooltip} onMouseLeave={handleMouseLeave}>{text}</div>
          : null}
      </TooltipTransition>
    );
  }

  render() {
    const { attachment, offset } = this.props;

    return (
      <TetherComponent
        attachment={attachment}
        offset={offset}
      >
        {this.renderTarget()}
        {this.renderTooltip()}
      </TetherComponent>
    );
  }
}

export default Tooltip;
