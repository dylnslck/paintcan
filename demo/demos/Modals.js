/* eslint-disable max-len */
import React from 'react';
import {
  Button,
  Tooltip,
  BasicModal,
  ConfirmModal,
  Modal,
  Content,
  Trigger,
} from '../../src';

const onConfirm = () => new Promise(resolve => setTimeout(resolve, 1000));

const ModalDemo = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Modals</h1>
    <Modal>
      <Trigger>
        <Button color="primary">Trigger and content modal</Button>
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
  </div>
);

/*
const old = (
  <div>
    <Modal target={<Button type="primary">Basic modal</Button>}>
      <BasicModal title="Basic Modal">
        <p>this is a basic modal</p>
        <Tooltip text="A tooltip man!" attachment="bottom center">
          <Button>Tooltip</Button>
        </Tooltip>
      </BasicModal>
    </Modal>
    <Modal target={<Button type="primary">Big modal</Button>}>
      <BasicModal title="Big Modal" size="lg">
        <p>this is a big modal</p>
      </BasicModal>
    </Modal>
    <Modal target={<Button type="primary">Confirm modal</Button>}>
      <ConfirmModal title="Are sure you want to do this?" onConfirm={onConfirm} />
    </Modal>
  </div>
);
*/

export default ModalDemo;
