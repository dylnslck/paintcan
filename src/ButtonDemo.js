import React from 'react';
import { Icon } from 'react-fa';
import { Button, ButtonGroup } from './buttons';

const ButtonDemo = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Buttons</h1>
    <p>Solid buttons</p>
    <pre>const Button = &lt;Button color="secondary"&gt;Button&lt;/Button&gt;</pre>
    <Button color="secondary">Secondary</Button>
    <Button color="primary">Primary</Button>
    <Button color="success">Success</Button>
    <Button color="danger">Danger</Button>
    <Button>Default</Button>
    <p>Circle buttons</p>
    <pre>const Button = &lt;Button color="secondary" circle&gt;Button&lt;/Button&gt;</pre>
    <Button color="secondary" circle />
    <Button color="primary" circle />
    <Button color="success" circle />
    <Button color="danger" circle />
    <Button circle />
    <p>Disabled buttons</p>
    <pre>const Button = &lt;Button color="secondary" disabled&gt;Button&lt;/Button&gt;</pre>
    <Button color="secondary" disabled>Secondary</Button>
    <Button color="primary" disabled>Primary</Button>
    <Button color="success" disabled>Success</Button>
    <Button color="danger" disabled>Danger</Button>
    <Button disabled>Default</Button>
    <p>Loading buttons</p>
    <pre>const Button = &lt;Button color="secondary" loading&gt;Button&lt;/Button&gt;</pre>
    <Button color="secondary" loading>Secondary</Button>
    <Button color="primary" loading>Primary</Button>
    <Button color="success" loading>Success</Button>
    <Button color="danger" loading>Danger</Button>
    <Button loading>Default</Button>
    <p>Disabled loading buttons</p>
    <pre>const Button = &lt;Button color="secondary" loading&gt;Button&lt;/Button&gt;</pre>
    <Button color="secondary" loading disabled>Secondary</Button>
    <Button color="primary" loading disabled>Primary</Button>
    <Button color="success" loading disabled>Success</Button>
    <Button color="danger" loading disabled>Danger</Button>
    <Button loading disabled>Default</Button>
    <p>Circle loading buttons</p>
    <pre>const Button = &lt;Button color="secondary" circle loading&gt;Button&lt;/Button&gt;</pre>
    <Button color="secondary" circle loading />
    <Button color="primary" circle loading />
    <Button color="success" circle loading />
    <Button color="danger" circle loading />
    <Button circle loading />
    <p>Outline buttons</p>
    <pre>const Button = &lt;Button color="secondary" outline&gt;Button&lt;/Button&gt;</pre>
    <Button color="secondary" outline>Secondary</Button>
    <Button color="primary" outline>Primary</Button>
    <Button color="success" outline>Success</Button>
    <Button color="danger" outline>Danger</Button>
    <Button outline>Default</Button>
    <p>Outline loading buttons</p>
    <pre>const Button = &lt;Button color="secondary" outline loading&gt;Button&lt;/Button&gt;</pre>
    <Button color="secondary" outline loading>Secondary</Button>
    <Button color="primary" outline loading>Primary</Button>
    <Button color="success" outline loading>Success</Button>
    <Button color="danger" outline loading>Danger</Button>
    <Button outline loading>Default</Button>
    <p>Outline circle buttons</p>
    <pre>const Button = &lt;Button color="secondary" outline circle&gt;Button&lt;/Button&gt;</pre>
    <Button color="secondary" outline circle />
    <Button color="primary" outline circle />
    <Button color="success" outline circle />
    <Button color="danger" outline circle />
    <Button outline circle />
    <p>Sizing</p>
    <pre>const Button = &lt;Button color="secondary" size="md"&gt;Button&lt;/Button&gt;</pre>
    <Button size="xs">Extra small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra large</Button>
    <p>Block</p>
    <pre>const Button = &lt;Button color="secondary" block&gt;Button&lt;/Button&gt;</pre>
    <div style={{ width: '300px' }}>
      <Button block>Block button</Button>
    </div>
    <div style={{ width: '300px' }}>
      <Button loading block>Block button</Button>
    </div>
    <p>Icons</p>
    <div>
      <Button
        color="secondary"
        icon={<Icon name="user" />}
      >
        Dylan Slack
      </Button>
      <Button
        color="secondary"
        icon={<Icon name="user" />}
        loading
      >
        Dylan Slack
      </Button>
    </div>
    <br></br>
    <div>
      <Button
        color="primary"
        icon={<Icon name="user" />}
        outline
      >
        Dylan Slack
      </Button>
      <Button
        color="primary"
        icon={<Icon name="user" />}
        outline
        loading
      >
        Dylan Slack
      </Button>
    </div>
    <br></br>
    <div>
      <Button
        color="primary"
        size="xl"
        icon={<Icon name="user" />}
        outline
      >
        Dylan Slack
      </Button>
      <Button
        color="primary"
        size="xl"
        icon={<Icon name="user" />}
        outline
        loading
      >
        Dylan Slack
      </Button>
    </div>
    <br></br>
    <div>
      <Button
        color="danger"
        icon={<Icon name="times" />}
        circle
      />
      <Button
        color="danger"
        size="xl"
        icon={<Icon name="times" />}
        circle
      />
      <Button
        color="danger"
        size="xl"
        icon={<Icon name="times" />}
        outline
        circle
      />
      <Button
        color="danger"
        size="xl"
        icon={<Icon name="times" />}
        outline
        circle
        disabled
      />
      <Button
        color="danger"
        size="xl"
        icon={<Icon name="times" />}
        outline
        circle
        disabled
        loading
      />
    </div>
    <p>Different tag</p>
    <Button tag="div">A div button</Button>
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
  </div>
);

export default ButtonDemo;
