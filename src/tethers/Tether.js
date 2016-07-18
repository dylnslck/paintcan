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
  static propTypes = {
    attachment: PropTypes.string, // TODO: oneOf[... full list of options]
    targetAttachment: PropTypes.string, // TODO: oneOf[... full list of options]
    offset: PropTypes.string,
    children: PropTypes.any, // TODO: proper validation (single element)
    leaveOnDocumentClick: PropTypes.bool,
    arrowColor: PropTypes.string,
    springProps: PropTypes.object,
    contentClassName: PropTypes.string,
    disableTransition: PropTypes.bool,
  }

  static defaultProps = {
    attachment: 'top left',
    targetAttachment: 'bottom left',
    offset: '0 0',
    leaveOnDocumentClick: false,
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

  static childContextTypes = {
    isOpen: PropTypes.bool,
    triggerNode: PropTypes.object,
    contentNode: PropTypes.object,
    showTether: PropTypes.func,
    hideTether: PropTypes.func,
    toggleTether: PropTypes.func,
  }

  constructor(props, context) {
    super(props, context);

    this.state = { isOpen: false, triggerNode: null, contentNode: null };

    this.showTether = debounce(this.showTether.bind(this));
    this.hideTether = debounce(this.hideTether.bind(this));
    this.toggleTether = this.toggleTether.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  getChildContext() {
    return {
      isOpen: this.state.isOpen,
      triggerNode: this.state.triggerNode,
      contentNode: this.state.contentNode,
      showTether: this.showTether,
      hideTether: this.hideTether,
      toggleTether: this.toggleTether,
    };
  }

  componentWillMount() {
    if (this.props.leaveOnDocumentClick) {
      document.addEventListener('click', this.handleDocumentClick, false);
    }

    this.setupTriggerAndContent();
  }

  componentWillUnmount() {
    if (this.props.leaveOnDocumentClick) {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }

  setupTriggerAndContent() {
    const { children } = this.props;

    const createRef = (key) => (ref) => (
      // FIXME: this makes me very nervous
      this.setState({ [key]: findDOMNode(ref) })
    );

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

  shouldHideTether(e, triggerNode, contentNode) {
    const { target, type } = e;
    const { leaveOnDocumentClick } = this.props;
    const { isOpen } = this.state;

    if (!isOpen) return false;
    if (!contentNode) return false;

    const wasTriggerClicked = (
      leaveOnDocumentClick &&
      type === 'click' &&
      (triggerNode === target || triggerNode.contains(target))
    );

    const wasBackgroundClicked = (
      leaveOnDocumentClick &&
      type === 'click' &&
      triggerNode !== target &&
      !triggerNode.contains(target) &&
      contentNode !== target &&
      !contentNode.contains(target)
    );

    return (
      wasTriggerClicked ||
      wasBackgroundClicked
    );
  }

  handleDocumentClick(e) {
    const { triggerNode, contentNode } = this.state;

    if (this.shouldHideTether(e, triggerNode, contentNode)) {
      this.hideTether();
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
    return this.trigger;
  }

  renderContent() {
    const { isOpen } = this.state;
    const { contentClassName, disableTransition } = this.props;
    const { content } = this;
    const contentProps = {};

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
