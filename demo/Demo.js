import React from 'react';
import ButtonDemo from './demos/Buttons';
import CardDemo from './demos/Cards';
import ModalDemo from './demos/Modals';
import TethersDemo from './demos/Tethers';
import GridDemo from './demos/Grid';
import Intro from './Intro';
import { Layout } from '../src/grid';

export default () => (
  <Layout>
    <Intro />
    <ButtonDemo />
    <CardDemo />
    <ModalDemo />
    <TethersDemo />
    <GridDemo />
  </Layout>
);
