import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import TetherComponent from 'react-tether';
import { Trigger, Content } from '../utils';
import styles from './styles.scss';

const PopoverTransition = ({ children: child }) => {
  // FIXME: add some global damping and stifness presets
  const gentleBounce = { stiffness: 200, damping: 10 };
  const willEnter = () => ({ opacity: 0, translateY: 4 });
  const willLeave = () => ({ opacity: spring(0), translateY: spring(4, gentleBounce) });
  const getStyles = () => ({ opacity: spring(1), translateY: spring(0, gentleBounce) });

  const defaultStyles = [{ key: 'popover', style: { opacity: 0, translateY: 0 }, data: child }];
  const transitionStyles = child ? [{ key: 'popover', style: getStyles(), data: child }] : [];

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

PopoverTransition.propTypes = {
  children: PropTypes.any, // FIXME: proper validation
};

class Popover extends Component {
  static propTypes = {
    attachment: PropTypes.string, // TODO: oneOf[... full list of options]
    offset: PropTypes.string,
    children: PropTypes.any, // TODO: proper validation (target and content)
  }

  static defaultProps = {
    attachment: 'bottom center',
    offset: '2px 0',
  }

  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.showPopover = this.showPopover.bind(this);
    this.hidePopover = this.hidePopover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentWillMount() {
    this.setupTriggerAndContent();
  }

  setupTriggerAndContent() {
    const { children } = this.props;

    // TODO: throw errors if more than one target is found - scratch that, just add better prop
    // validation
    Children.forEach(children, child => {
      if (child.type === Trigger) this.target = child.props.children;
      if (child.type === Content) this.content = child.props.children;
    });
  }

  showPopover() {
    this.setState({ isOpen: true });
  }

  hidePopover() {
    this.setState({ isOpen: false });
  }

  handleMouseLeave(e) {
    e.persist();

    // FIXME: super frail
    if (e.relatedTarget.className.indexOf('popover') < 0) this.hidePopover();
  }

  renderTrigger() {
    const target = Children.only(this.target);

    // adding a little delay gets rid of some small glitches
    const handleMouseEnter = () => setTimeout(this.showPopover, 50);
    const handleMouseLeave = this.handleMouseLeave;

    return cloneElement(target, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    });
  }

  renderPopover() {
    const { isOpen } = this.state;
    const content = this.content;

    const popover = (
      <div className={styles.popover} onMouseLeave={this.handleMouseLeave}>
        {content}
      </div>
    );

    return (
      <PopoverTransition>
        {isOpen ? popover : null}
      </PopoverTransition>
    );
  }

  render() {
    const { attachment, offset } = this.props;

    return (
      <TetherComponent attachment={attachment} offset={offset}>
        {this.renderTrigger()}
        {this.renderPopover()}
      </TetherComponent>
    );
  }
}

export default Popover;
