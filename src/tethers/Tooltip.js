import React, { PropTypes } from 'react';
import Tether from './Tether';
import styles from './tooltip.scss';

const MARGIN = '6px';

const mapPlacementToAttachment = (placement) => {
  switch (placement) {
    case 'top': return 'bottom center';
    case 'bottom': return 'top center';
    case 'right': return 'middle left';
    case 'left': return 'middle right';
    default: return 'bottom center';
  }
};

const mapPlacementToTargetAttachment = (placement) => {
  switch (placement) {
    case 'top': return 'top center';
    case 'bottom': return 'bottom center';
    case 'right': return 'middle right';
    case 'left': return 'middle left';
    default: return 'top center';
  }
};

const mapAttachmentToOffset = (attachment) => {
  switch (attachment) {
    case 'bottom center': return `${MARGIN} 0`;
    case 'top center': return `-${MARGIN} 0`;
    case 'middle left': return `0 -${MARGIN}`;
    case 'middle right': return `0 ${MARGIN}`;
    default: return `${MARGIN} 0`;
  }
};

const Tooltip = ({ placement, children }) => {
  const attachment = mapPlacementToAttachment(placement);
  const targetAttachment = mapPlacementToTargetAttachment(placement);
  const offset = mapAttachmentToOffset(attachment);
  const className = styles[attachment.split(' ').join('-')];

  return (
    <Tether
      contentClassName={className}
      attachment={attachment}
      targetAttachment={targetAttachment}
      offset={offset}
      showTetherOn="enterTrigger"
      hideTetherOn="leaveTrigger"
    >
      {children}
    </Tether>
  );
};

Tooltip.propTypes = {
  placement: PropTypes.string,
  children: PropTypes.any,
};

Tooltip.defaultProps = {
  placement: 'top',
};

export default Tooltip;
