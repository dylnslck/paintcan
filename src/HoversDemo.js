/* eslint-disable max-len */
/* eslint-disable no-alert */
import React from 'react';
import Button from './buttons/Button';
import Tooltip from './hovers/Tooltip';
import Popover from './hovers/Popover';
import { Trigger, Content } from './utils';

const HoversDemo = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Hovers</h1>
    <Tooltip text="A tooltip man!" attachment="bottom center">
      <Button>Tooltip</Button>
    </Tooltip>
    <Popover attachment="bottom center">
      <Trigger>
        <Button>Popover</Button>
      </Trigger>
      <Content>
        <p>I am a big popover</p>
        <Button color="primary" onClick={() => alert('hello!')}>Click me</Button>
      </Content>
    </Popover>
  </div>
);

export default HoversDemo;
