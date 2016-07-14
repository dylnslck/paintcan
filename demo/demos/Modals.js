/* eslint-disable max-len */
import React from 'react';
import {
  BasicModal,
  Button,
  ButtonGroup,
  ConfirmModal,
  Container,
  Content,
  Col,
  Modal,
  Row,
  Tooltip,
  Trigger,
} from '../../src';

const onConfirm = () => new Promise(() => alert('Done!'));

const ModalDemo = () => (
  <Container>
    <Row>
      <Col>
        <h2>Modals</h2>
        <hr></hr>
        <ButtonGroup>
          <Modal>
            <Trigger>
              <Button color="primary">Basic modal</Button>
            </Trigger>
            <Content>
              <BasicModal title="Basic Modal">
                <p>this is a basic modal</p>
                <Tooltip text="A tooltip man!" attachment="bottom center">
                  <Trigger>
                    <Button>Tooltip</Button>
                  </Trigger>
                  <Content>
                    <div>i am a tooltip</div>
                  </Content>
                </Tooltip>
              </BasicModal>
            </Content>
          </Modal>
          <Modal>
            <Trigger>
              <Button color="primary">Confirm modal</Button>
            </Trigger>
            <Content>
              <ConfirmModal
                title="Are you sure you want to do this?"
                onConfirm={onConfirm}
              />
            </Content>
          </Modal>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
);

export default ModalDemo;
