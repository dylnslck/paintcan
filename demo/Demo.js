import React from 'react';
import ButtonDemo from './demos/Buttons';
import ModalDemo from './demos/Modals';
import TethersDemo from './demos/Tethers';
import Intro from './Intro';
import { Layout } from '../src/grid';

export default () => (
  <Layout>
    <Intro />
    <ButtonDemo />
    <ModalDemo />
    <TethersDemo />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </Layout>
);
