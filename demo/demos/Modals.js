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

const Modal = withModal(
  ({ openModal }) => (
    <Button onClick={openModal} color="primary">
      Open modal!
    </Button>
  ),
  ({ closeModal, test }) => (
    <Card>
      <p>Hello! {test}</p>
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
        <Modal closeOnBackdropClick test="hey ho" />
      </Col>
    </Row>
  </Container>
);

export default ModalDemo;
