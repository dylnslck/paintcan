/* eslint-disable no-alert */
import React from 'react';
import Button from './buttons/Button';
import { Dropdown, Popover, Tooltip } from './tethers';
import { Content, Trigger } from './utils';

const TethersDemo = () => (
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
    <Dropdown>
      <Trigger>
        <Button>Dropdown</Button>
      </Trigger>
      <Content>
        <p>I am a dropdown yo</p>
        <Button color="primary" onClick={() => alert('hello!')}>Click me</Button>
      </Content>
    </Dropdown>
  </div>
);

export default TethersDemo;
