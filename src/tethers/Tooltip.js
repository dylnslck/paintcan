import React, { Component, PropTypes, cloneElement } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import TetherComponent from 'react-tether';
import { debounce } from 'lodash';
import styles from './styles.scss';

const TooltipTransition = ({ children: child }) => {
  // FIXME: add some damping and stifness presets
  // FIXME: hovering over popover then immediately going to tooltip doesn't render on first try
  const springConstants = { stiffness: 400, damping: 26 };
  const willEnter = () => ({ opacity: 0.5, translateY: 2 });
  const willLeave = () => ({ opacity: spring(0), translateY: spring(2, springConstants) });
  const getStyles = () => ({ opacity: spring(1), translateY: spring(0, springConstants) });

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
    placement: PropTypes.string, // TODO: oneOf[... full list of options]
    offset: PropTypes.string,
    children: PropTypes.any, // TODO: proper validation (single element)
  }

  // TODO: map offset numbers to styles
  static defaultProps = {
    placement: 'top',
  }

  constructor(props) {
    super(props);

    this.state = { isOpen: true };
    this.showTooltip = debounce(this.showTooltip.bind(this), 150);
    this.cancelTooltip = this.showTooltip.cancel;
    this.hideTooltip = this.hideTooltip.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount() {
    // FIXME: probably the hackiest thing I've ever seen
    setTimeout(this.hideTooltip, 0);
  }

  showTooltip() {
    this.setState({ isOpen: true });
  }

  hideTooltip() {
    this.cancelTooltip();
    this.setState({ isOpen: false });
  }

  handleMouseOver(e) {
    console.log('hovering!');
  }

  mapPlacementToAttachment(placement) {
    switch (placement) {
      case 'top': return 'bottom center';
      case 'bottom': return 'top center';
      case 'right': return 'middle left';
      case 'left': return 'middle right';
      default: return 'bottom center';
    }
  }

  mapAttachmentToClassName() {
    const attachment = this.mapPlacementToAttachment(this.props.placement);

    return attachment.split(' ').join('-');
  }

  mapAttachmentToOffset(attachment) {
    const margin = '6px';

    switch (attachment) {
      case 'bottom center': return `${margin} 0`;
      case 'top center': return `-${margin} 0`;
      case 'middle left': return `0 -${margin}`;
      case 'middle right': return `0 ${margin}`;
      default: return `${margin} 0`;
    }
  }

  renderTrigger() {
    const { children, ...options } = this.props;

    // adding a little delay gets rid of some small glitches
    // const handleMouseEnter = () => setTimeout(this.showTooltip, 200);
    const handleMouseEnter = this.showTooltip;
    const handleMouseLeave = this.hideTooltip;

    return cloneElement(children, {
      onMouseOver: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ...options,
    });
  }

  renderTooltip() {
    const { text } = this.props;
    const { isOpen } = this.state;

    const handleMouseLeave = this.handleMouseLeave;
    const className = styles[this.mapAttachmentToClassName()];

    return (
      <TooltipTransition>
        {isOpen
          ? <div className={className} onMouseLeave={handleMouseLeave}>{text}</div>
          : null}
      </TooltipTransition>
    );
  }

  render() {
    const { placement } = this.props;
    const attachment = this.mapPlacementToAttachment(placement);
    const offset = this.mapAttachmentToOffset(attachment);

    return (
      <TetherComponent
        attachment={attachment}
        offset={offset}
      >
        {this.renderTrigger()}
        {this.renderTooltip()}
      </TetherComponent>
    );
  }
}

export default Tooltip;
