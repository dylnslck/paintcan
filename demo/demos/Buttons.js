import React from 'react';
import { Icon } from 'react-fa';
import Highlight from 'react-highlight';


import { Button, ButtonGroup, Col, Container, Row } from '../../src';


const ButtonDemo = () => (
  <Container>
    <Row>
      <Col>
        <h2>Buttons</h2>
        <hr></hr>
        <Row align={{ sm: 'middle' }}>
          <Col><p>Solid buttons</p></Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Button color="secondary">Secondary</Button>
            <Button color="primary">Primary</Button>
            <Button color="success">Success</Button>
            <Button color="danger">Danger</Button>
            <Button>Default</Button>
          </Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Highlight>{'<Button color="secondary">Button<Button>'}</Highlight>
            <Highlight>{'<Button color="primary">Button<Button>'}</Highlight>
            <Highlight>{'<Button color="success">Button<Button>'}</Highlight>
            <Highlight>{'<Button color="danger">Button<Button>'}</Highlight>
            <Highlight>{'<Button>Default<Button>'}</Highlight>
          </Col>
        </Row>
        <Row align={{ sm: 'middle' }}>
          <Col><p>Outline buttons</p></Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Button color="secondary" outline>Secondary</Button>
            <Button color="primary" outline>Primary</Button>
            <Button color="success" outline>Success</Button>
            <Button color="danger" outline>Danger</Button>
            <Button outline>Default</Button>
          </Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Highlight>{'<Button color="secondary" outline>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="primary" outline>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="success" outline>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="danger" outline>Button<Button>'}</Highlight>
            <Highlight>{'<Button outline>Default<Button>'}</Highlight>
          </Col>
        </Row>
        <Row align={{ sm: 'middle' }}>
          <Col><p>Circle buttons</p></Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Button color="secondary" circle />
            <Button color="primary" circle />
            <Button color="success" circle />
            <Button color="danger" circle />
            <Button circle />
          </Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Highlight>{'<Button color="secondary" circle>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="primary" circle>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="success" circle>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="danger" circle>Button<Button>'}</Highlight>
            <Highlight>{'<Button circle>Default<Button>'}</Highlight>
          </Col>
        </Row>
        <Row align={{ sm: 'middle' }}>
          <Col><p>Disabled buttons</p></Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Button color="secondary" disabled>Secondary</Button>
            <Button color="primary" disabled>Primary</Button>
            <Button color="success" disabled>Success</Button>
            <Button color="danger" disabled>Danger</Button>
            <Button disabled>Default</Button>
          </Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Highlight>{'<Button color="secondary" disabled>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="primary" disabled>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="success" disabled>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="danger" disabled>Button<Button>'}</Highlight>
            <Highlight>{'<Button disabled>Default<Button>'}</Highlight>
          </Col>
        </Row>
        <Row align={{ sm: 'middle' }}>
          <Col><p>Active buttons</p></Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Button color="secondary" active>Secondary</Button>
            <Button color="primary" active>Primary</Button>
            <Button color="success" active>Success</Button>
            <Button color="danger" active>Danger</Button>
            <Button active>Default</Button>
          </Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Highlight>{'<Button color="secondary" active>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="primary" active>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="success" active>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="danger" active>Button<Button>'}</Highlight>
            <Highlight>{'<Button active>Default<Button>'}</Highlight>
          </Col>
        </Row>
        <Row align={{ sm: 'middle' }}>
          <Col><p>Loading buttons</p></Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Button color="secondary" loading>Secondary</Button>
            <Button color="primary" loading>Primary</Button>
            <Button color="success" loading>Success</Button>
            <Button color="danger" loading>Danger</Button>
            <Button loading>Default</Button>
          </Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Highlight>{'<Button color="secondary" loading>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="primary" loading>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="success" loading>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="danger" loading>Button<Button>'}</Highlight>
            <Highlight>{'<Button loading>Default<Button>'}</Highlight>
          </Col>
        </Row>
        <Row align={{ sm: 'middle' }}>
          <Col><p>Sizing</p></Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra large</Button>
          </Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Highlight>{'<Button size="xs">Extra small<Button>'}</Highlight>
            <Highlight>{'<Button size="sm">Small<Button>'}</Highlight>
            <Highlight>{'<Button size="md">Medium<Button>'}</Highlight>
            <Highlight>{'<Button size="lg">Large<Button>'}</Highlight>
            <Highlight>{'<Button size="xl">Extra large<Button>'}</Highlight>
          </Col>
        </Row>
        <Row align={{ sm: 'middle' }}>
          <Col><p>Block</p></Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Button color="secondary" block>Secondary</Button>
            <Button color="primary" block>Primary</Button>
            <Button color="success" block>Success</Button>
            <Button color="danger" block>Danger</Button>
            <Button block>Default</Button>
          </Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Highlight>{'<Button color="secondary" block>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="primary" block>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="success" block>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="danger" block>Button<Button>'}</Highlight>
            <Highlight>{'<Button block>Default<Button>'}</Highlight>
          </Col>
        </Row>
        <Row align={{ sm: 'middle' }}>
          <Col><p>Icons</p></Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Button color="secondary" icon={<Icon name="user" />}>Button</Button>
            <Button color="primary" icon={<Icon name="rocket" />}>Button</Button>
            <Button color="success" icon={<Icon name="calendar-o" />}>Button</Button>
            <Button color="danger" icon={<Icon name="list" />}>Button</Button>
            <Button icon={<Icon name="sign-in" />}>Button</Button>
          </Col>
          <Col sizes={{ xs: 12, sm: 6 }}>
            <Highlight>{'<Button color="secondary" block>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="primary" block>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="success" block>Button<Button>'}</Highlight>
            <Highlight>{'<Button color="danger" block>Button<Button>'}</Highlight>
            <Highlight>{'<Button block>Default<Button>'}</Highlight>
          </Col>
        </Row>
        <h1>Button groups</h1>
        <p>Grouped</p>
        <pre>const ButtonGroup = (
          <br></br>
          &nbsp;&nbsp;&lt;ButtonGroup&gt;
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;Button color="secondary" circle&gt;Button&lt;/Button&gt;
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;Button color="secondary" circle&gt;Button&lt;/Button&gt;
          <br></br>
          &nbsp;&nbsp;&lt;/ButtonGroup&gt;
          <br></br>
        );
        </pre>
        <ButtonGroup>
          <Button color="secondary">Secondary</Button>
          <Button color="primary">Primary</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button>Default</Button>
        </ButtonGroup>
        <p>Spaced</p>
        <pre>const ButtonGroup = (
          <br></br>
          &nbsp;&nbsp;&lt;ButtonGroup spaced&gt;
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;Button color="secondary" circle&gt;Button&lt;/Button&gt;
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;Button color="secondary" circle&gt;Button&lt;/Button&gt;
          <br></br>
          &nbsp;&nbsp;&lt;/ButtonGroup&gt;
          <br></br>
        );
        </pre>
        <ButtonGroup spaced>
          <Button color="secondary">Secondary</Button>
          <Button color="primary">Primary</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button>Default</Button>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
);

export default ButtonDemo;
