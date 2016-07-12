/* eslint-disable max-len */
/* eslint-disable no-alert */
import React from 'react';
import Dropdown from './dropdowns/Dropdown';
import { Button } from './buttons';
import { Card } from './cards';
import { Trigger, Content } from './utils';

const DropdownDemo = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Dropdowns</h1>
    <Dropdown>
      <Trigger>
        <Button>Basic AF dropdown</Button>
      </Trigger>
      <Content>
        <p>I am a dropdown</p>
        <Button color="primary" onClick={() => alert('hello!')}>Click me</Button>
      </Content>
    </Dropdown>
    <Dropdown>
      <Trigger>
        <Button>Card dropdown</Button>
      </Trigger>
      <Content>
        <Card>
          <p>I am a card dropdown</p>
          <Button color="primary" onClick={() => alert('hello!')}>Click me</Button>
        </Card>
      </Content>
    </Dropdown>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
);

export default DropdownDemo;
