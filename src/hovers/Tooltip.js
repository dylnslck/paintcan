import React, { Component, PropTypes, cloneElement } from 'react';
import { Motion, spring } from 'react-motion';
import TetherComponent from 'react-tether';
import styles from './styles.scss';

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

    return cloneElement(children, {
      onMouseEnter: this.showTooltip,
      onMouseLeave: this.hideTooltip,
    });
  }

  renderTooltip() {
    const { text } = this.props;
    const { isOpen } = this.state;

    if (!isOpen) return '';

    const tooltip = <div className={styles.tooltip}>{text}</div>;

    const getContent = ({ opacity, translateY }) => {
      const style = { opacity, transform: `translateY(${translateY}px)` };

      return cloneElement(tooltip, { style });
    };

    return (
      <Motion
        defaultStyle={{ opacity: 0.4, translateY: 4 }}
        style={{ opacity: spring(1.0), translateY: spring(0, { stiffness: 200, damping: 10 }) }}
      >
        {interpolated => getContent(interpolated)}
      </Motion>
    );
  }

  render() {
    const { attachment, offset } = this.props;

    return (
      <TetherComponent
        attachment={attachment}
        offset={offset}
        key="1"
      >
        {this.renderTarget()}
        {this.renderTooltip()}
      </TetherComponent>
    );
  }
}

export default Tooltip;
