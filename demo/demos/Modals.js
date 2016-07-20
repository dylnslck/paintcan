/* eslint-disable max-len */
import React from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Row,
} from '../../src';

import withModal from '../../src/wrappers/withModal';
import withSelect from '../../src/wrappers/withSelect';
import JobSelect from './test';

const someItems = [{
  id: '1',
  label: 'hello',
}, {
  id: '2',
  label: 'goodbye',
}];

const Modal = withModal(
  ({ openModal }) => (
    <Button onClick={openModal} color="primary">
      Open modal!
    </Button>
  ),
  ({ closeModal, test }) => (
    <Card>
      <p>Hello! {test}</p>
      <JobSelect items={someItems} />
      <Button onClick={closeModal}>
        close!
      </Button>
    </Card>
  ),
);

const ModalDemo = () => (
  <Container>
    <Row>
      <Col>
        <Modal test="hey ho" />
      </Col>
    </Row>
  </Container>
);

export default ModalDemo;
