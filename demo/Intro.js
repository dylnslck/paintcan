import React from 'react';
import { Container, Row, Col } from '../src/';

const Intro = () => (
  <Container fluid>
    <Row full align={{ xs: 'center middle' }}>
      <Col>
        <h1 style={{ fontSize: '5rem' }}>Paintcan</h1>
        <p>A minimal UI framework for React</p>
      </Col>
    </Row>
  </Container>
);

export default Intro;
