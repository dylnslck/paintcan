import React, { PropTypes } from 'react';
import Tether from './Tether';
import styles from './dropdown.scss';

const MARGIN = '6px';

const mapPlacementToAttachment = (placement) => {
  switch (placement) {
    case 'top': return 'bottom left';
    case 'bottom': return 'top left';
    case 'right': return 'middle left';
    case 'left': return 'middle right';
    default: return 'bottom left';
  }
};

const mapPlacementToTargetAttachment = (placement) => {
  switch (placement) {
    case 'top': return 'top left';
    case 'bottom': return 'bottom left';
    case 'right': return 'middle right';
    case 'left': return 'middle left';
    default: return 'top left';
  }
};

const mapAttachmentToOffset = (attachment) => {
  switch (attachment) {
    case 'bottom left': return `${MARGIN} 0`;
    case 'top left': return `-${MARGIN} 0`;
    case 'middle left': return `0 -${MARGIN}`;
    case 'middle right': return `0 ${MARGIN}`;
    default: return `${MARGIN} 0`;
  }
};

const Dropdown = ({ placement, children }) => {
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
    >
      {children}
    </Tether>
  );
};

Dropdown.propTypes = {
  placement: PropTypes.string,
  children: PropTypes.any,
};

Dropdown.defaultProps = {
  placement: 'top',
};

export default Dropdown;
