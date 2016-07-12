/* eslint-disable max-len */
/* eslint-disable no-alert */
import React from 'react';
import { Row, Container, Col, Layout } from '../../src/grid';

const GridDemo = () => (
  <div>
    <h1>Grid Demo</h1>
    <Layout>
      <Container fluid>
        <Row full align={{ xs: 'middle center' }}>
          <Col sizes={{ xs: 12, lg: 6 }}>
            I am col1
          </Col>
          <Col sizes={{ xs: 12, lg: 6 }}>
            I am col2
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
);

export default GridDemo;
