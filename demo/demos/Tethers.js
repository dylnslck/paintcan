/* eslint-disable no-alert */
import React from 'react';
import { Icon } from 'react-fa';
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Content,
  Container,
  Dropdown,
  Popover,
  Row,
  Tooltip,
  Trigger,
} from '../../src';

const TethersDemo = () => (
  <Container>
    <Row>
      <Col>
        <h2>Tethers</h2>
        <hr></hr>
        <ButtonGroup spaced>
          <Tooltip text="Some tooltip text">
            <Button>Top</Button>
          </Tooltip>
          <Tooltip text="Some tooltip text" placement="left">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip text="Some tooltip text" placement="right">
            <Button>Right</Button>
          </Tooltip>
          <Tooltip text="Some tooltip text" placement="bottom">
            <Button>Bottom</Button>
          </Tooltip>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
);

export default TethersDemo;
