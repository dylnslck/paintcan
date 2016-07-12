import 'normalize.css';
import './styles/index.scss';
import React from 'react';
import ButtonDemo from './ButtonDemo';
import CardDemo from './CardDemo';
import ModalDemo from './ModalDemo';
import TethersDemo from './TethersDemo';
import GridDemo from './GridDemo';

export default () => (
  <div>
    <ButtonDemo />
    <CardDemo />
    <ModalDemo />
    <TethersDemo />
    <GridDemo />
  </div>
);
