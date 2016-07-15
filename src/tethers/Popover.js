import React, { PropTypes } from 'react';
import Tether from './Tether';
import styles from './popover.scss';

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

const Popover = ({ placement, children, disableTransition }) => {
  const attachment = mapPlacementToAttachment(placement);
  const targetAttachment = mapPlacementToTargetAttachment(placement);
  const className = styles[attachment.split(' ').join('-')];

  return (
    <Tether
      contentClassName={className}
      attachment={attachment}
      targetAttachment={targetAttachment}
      disableTransition={disableTransition}
      showTetherOn="enterTrigger"
      hideTetherOn="leaveContent"
    >
      {children}
    </Tether>
  );
};

Popover.propTypes = {
  placement: PropTypes.string,
  children: PropTypes.any,
  disableTransition: PropTypes.bool,
};

Popover.defaultProps = {
  placement: 'top',
  disableTransition: true,
};

export default Popover;
