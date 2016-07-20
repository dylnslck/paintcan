/* eslint-disable no-alert */
import React, { PropTypes } from 'react';

import {
  Button,
  Card,
  Col,
  Container,
  Row,
} from '../../src';

import { Dropdown } from '../../src/tethers/Dropdown2';
import withSelect from '../../src/wrappers/withSelect';

const someItems = [{
  id: '1',
  label: 'hello',
}, {
  id: '2',
  label: 'goodbye',
}]

const Select = withSelect(
  ({ isOpen, toggleSelect, item }) => (
    <Button active={isOpen} onClick={toggleSelect}>
      {item ? item.label : 'Select'}
    </Button>
  ),
  ({ onSelect, items }) => (
    <Card>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onSelect(item)}>
            {item.label}
          </li>
        ))}
      </ul>
    </Card>
  )
);

const TethersDemo = () => (
  <Container>
    <Row>
      <Col>
        <p>Hello select</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Dropdown blah="hello" />
      </Col>
    </Row>
    <Row>
      <Col>
        Select
        <Select items={someItems} />
      </Col>
    </Row>
  </Container>
);

export default TethersDemo;
