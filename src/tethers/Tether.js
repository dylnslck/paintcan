import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import { TransitionMotion, spring } from 'react-motion';
import TetherComponent from 'react-tether';
import { debounce } from 'lodash';
import { Trigger, Content } from '../utils';

const TetherTransition = ({ children: child }) => {
  // FIXME: add some damping and stifness presets
  const gentleBounce = { stiffness: 200, damping: 10 };
  const willEnter = () => ({ opacity: 0, translateY: 4 });
  const willLeave = () => ({ opacity: spring(0), translateY: spring(4, gentleBounce) });
  const getStyles = () => ({ opacity: spring(1), translateY: spring(0, gentleBounce) });
  const transitionStyles = child ? [{ key: 'dropdown', style: getStyles(), data: child }] : [];

  return (
    <TransitionMotion
      willEnter={willEnter}
      willLeave={willLeave}
      styles={transitionStyles}
    >
      {interpolated =>
        <span>
          {interpolated.map(({ key, style, data }) =>
            cloneElement(data, {
              key,
              style: {
                opacity: style.opacity,
                transform: `translateY(${style.translateY}px)`,
              },
            })
          )}
        </span>
      }
    </TransitionMotion>
  );
};

TetherTransition.propTypes = {
  children: PropTypes.any, // FIXME: proper validation
};

class Tether extends Component {
  static allowedShowTetherEvents = [
    'click',
    'enterTrigger',
  ]

  static allowedHideTetherEvents = [
    'click',
    'leaveTrigger',
    'leaveContent',
  ]

  static propTypes = {
    attachment: PropTypes.string, // TODO: oneOf[... full list of options]
    targetAttachment: PropTypes.string, // TODO: oneOf[... full list of options]
    offset: PropTypes.string,
    children: PropTypes.any, // TODO: proper validation (single element)
    hideTetherOn: PropTypes.string, // TODO: proper validation (one of allowedHideTetherEvents)
    showTetherOn: PropTypes.string, // TODO: proper validation (one of allowedShowTetherEvents)
    arrowColor: PropTypes.string,
    springProps: PropTypes.object,
    contentClassName: PropTypes.string,
    disableTransition: PropTypes.bool,
  }

  static defaultProps = {
    attachment: 'top left',
    targetAttachment: 'bottom left',
    offset: '0 0',
    showTetherOn: 'click',
    hideTetherOn: 'click',
    disableTransition: true,
    springProps: {
      enter: {
        stiffness: 170,
        damping: 26,
      },
      leave: {
        stiffness: 170,
        damping: 26,
      },
    },
  }

  constructor(props) {
    super(props);

    this.state = { isOpen: true };

    this.showTether = debounce(this.showTether.bind(this));
    this.hideTether = debounce(this.hideTether.bind(this));

    this.toggleTether = this.toggleTether.bind(this);
    this.handleHideEvents = this.handleHideEvents.bind(this);
    this.handleShowEvents = this.handleShowEvents.bind(this);
  }

  componentWillMount() {
    document.addEventListener('click', this.handleHideEvents, false);
    this.setupTriggerAndContent();
  }

  componentDidMount() {
    // FIXME: super hacky, need fix
    /* eslint-disable react/no-did-mount-set-state */
    setTimeout(this.setState({ isOpen: false }), 0);
    this.didMount = true;
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleHideEvents);
  }

  setupTriggerAndContent() {
    const { children } = this.props;

    const createRef = (key) => (ref) => {
      this[key] = findDOMNode(ref);
    };

    Children.forEach(children, child => {
      if (child.type === Trigger) {
        this.trigger = cloneElement(child, {
          ref: createRef('triggerNode'),
        });
      }

      if (child.type === Content) {
        this.content = cloneElement(child, {
          ref: createRef('contentNode'),
        });
      }
    });
  }

  shouldHideTether(e, trigger, content) {
    const { target, type, relatedTarget } = e;
    const { hideTetherOn } = this.props;
    const { isOpen } = this.state;

    if (!(isOpen && content)) return false;

    const wasTriggerClicked = (
      type === 'click' &&
      hideTetherOn === 'click' &&
      (trigger === target || trigger.contains(target))
    );

    const wasBackgroundClicked = (
      type === 'click' &&
      hideTetherOn === 'click' &&
      trigger !== target &&
      !trigger.contains(target) &&
      content !== target &&
      !content.contains(target)
    );

    const didLeaveTrigger = (
      type === 'mouseleave' &&
      hideTetherOn === 'leaveTrigger' &&
      (trigger === target || trigger.contains(target))
    );

    const didLeaveContent = (
      type === 'mouseleave' &&
      hideTetherOn === 'leaveContent' &&
      content !== relatedTarget &&
      !content.contains(relatedTarget)
    );

    return (
      wasTriggerClicked ||
      wasBackgroundClicked ||
      didLeaveTrigger ||
      didLeaveContent
    );
  }

  shouldShowTether(e, trigger) {
    const { target, type } = e;
    const { showTetherOn } = this.props;
    const { isOpen } = this.state;

    if (isOpen) return false;

    const wasClicked = (
      type === 'click' &&
      showTetherOn === 'click' &&
      (trigger === target || trigger.contains(target))
    );

    const wasEntered = (
      type === 'mouseover' &&
      showTetherOn === 'enterTrigger' &&
      (trigger === target || trigger.contains(target))
    );

    return (
      wasClicked ||
      wasEntered
    );
  }

  handleHideEvents(e) {
    const { contentNode: content, triggerNode: trigger } = this;

    if (this.shouldHideTether(e, trigger, content)) {
      this.hideTether();
    }
  }

  handleShowEvents(e) {
    const { triggerNode: trigger } = this;

    if (this.shouldShowTether(e, trigger)) {
      this.showTether();
    }
  }

  showTether() {
    this.hideTether.cancel();
    this.setState({ isOpen: true });
  }

  hideTether() {
    this.showTether.cancel();
    this.setState({ isOpen: false });
  }

  toggleTether() {
    return this.state.isOpen
      ? this.hideTether()
      : this.showTether();
  }

  renderTrigger() {
    return cloneElement(this.trigger, {
      active: this.state.isOpen,
      onClick: this.handleShowEvents,
      onMouseOver: this.handleShowEvents,
      onMouseLeave: this.handleHideEvents,
    });
  }

  renderContent() {
    const { isOpen } = this.state;
    const { hideTetherOn, contentClassName, disableTransition } = this.props;
    const { content } = this;
    const contentProps = {};

    if (hideTetherOn === 'leaveContent') {
      contentProps.onMouseLeave = this.hideTether;
    }

    if (contentClassName) {
      contentProps.className = contentClassName;
    }

    const clonedContent = <div>{isOpen ? cloneElement(content, contentProps) : null}</div>;
    const withTransition = <TetherTransition>{clonedContent}</TetherTransition>;

    return disableTransition ? clonedContent : withTransition;
  }

  render() {
    const { attachment, targetAttachment, offset } = this.props;

    return (
      <TetherComponent
        attachment={attachment}
        targetAttachment={targetAttachment}
        offset={offset}
      >
        {this.renderTrigger()}
        {this.renderContent()}
      </TetherComponent>
    );
  }
}

export default Tether;
