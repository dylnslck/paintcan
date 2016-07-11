/* eslint-disable max-len */
import React from 'react';
import Button from './buttons/Button';
import Modal from './ui/Modal/Modal';
import Tooltip from './hovers/Tooltip';
import BasicModal from './modals/Basic';
import ConfirmModal from './modals/Confirm';

const onConfirm = () => new Promise(resolve => setTimeout(resolve, 1000));

const ModalDemo = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Modals</h1>
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

export default ModalDemo;
