/* eslint-disable max-len */
import React from 'react';
import Button from './buttons/Button';
import Tooltip from './hovers/Tooltip';

const HoversDemo = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Hovers</h1>
    <Tooltip text="A tooltip man!" attachment="bottom center">
      <Button>Tooltip</Button>
    </Tooltip>
  </div>
);

export default HoversDemo;
