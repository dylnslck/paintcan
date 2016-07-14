/* eslint-disable no-alert */
import React from 'react';
import { Icon } from 'react-fa';
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Content,
  Container,
  Dropdown,
  Popover,
  Row,
  Tether,
  Tooltip,
  Trigger,
} from '../../src';

const TethersDemo = () => (
  <Container>
    <Row>
      <Col>
        <h2>Tethers</h2>
        <hr></hr>
        <p>General tethers</p>
        <ButtonGroup spaced>
          <Tether>
            <Trigger>
              <Button>Tether on click</Button>
            </Trigger>
            <Content>
              <Card>
                This should hide when you click outside of the box or on the button
              </Card>
            </Content>
          </Tether>
          <Tether showTetherOn="enterTrigger" hideTetherOn="leaveTrigger">
            <Trigger>
              <Button>Tether on hover</Button>
            </Trigger>
            <Content>
              <Card>
                This should hide when your mouse leaves the trigger
              </Card>
            </Content>
          </Tether>
          <Tether showTetherOn="enterTrigger" hideTetherOn="leaveContent">
            <Trigger>
              <Button>Tether on hover</Button>
            </Trigger>
            <Content>
              <Card>
                This should hide when your mouse leaves the content
              </Card>
            </Content>
          </Tether>
        </ButtonGroup>
        <p>Advanced tethers</p>
        <ButtonGroup spaced>
          <Tether
            attachment="middle left"
            targetAttachment="middle right"
          >
            <Trigger>
              <Button>Right drodown</Button>
            </Trigger>
            <Content>
              <Card>
                This should hide when you click outside of the box or on the button
              </Card>
            </Content>
          </Tether>
          <Tether
            showTetherOn="enterTrigger"
            hideTetherOn="leaveTrigger"
            attachment="middle right"
            targetAttachment="middle left"
          >
            <Trigger>
              <Button>Tether on hover</Button>
            </Trigger>
            <Content>
              <Card>
                This should hide when your mouse leaves the trigger
              </Card>
            </Content>
          </Tether>
          <Tether
            showTetherOn="enterTrigger"
            hideTetherOn="leaveContent"
            attachment="middle left"
            targetAttachment="middle right"
          >
            <Trigger>
              <Button>Tether on hover</Button>
            </Trigger>
            <Content>
              <Card>
                This should hide when your mouse leaves the content
              </Card>
            </Content>
          </Tether>
        </ButtonGroup>
        <p>Tooltips</p>
        <ButtonGroup spaced>
          <Tooltip>
            <Trigger>
              <Button>Top (default)</Button>
            </Trigger>
            <Content>
              <div>i am a tooltip</div>
            </Content>
          </Tooltip>
          <Tooltip placement="left">
            <Trigger>
              <Button>Left</Button>
            </Trigger>
            <Content>
              <div>i am a tooltip</div>
            </Content>
          </Tooltip>
          <Tooltip placement="right">
            <Trigger>
              <Button>Right</Button>
            </Trigger>
            <Content>
              <div>i am a tooltip</div>
            </Content>
          </Tooltip>
          <Tooltip placement="bottom">
            <Trigger>
              <Button>Bottom</Button>
            </Trigger>
            <Content>
              <div>i am a tooltip</div>
            </Content>
          </Tooltip>
        </ButtonGroup>
        <p>Popovers</p>
        <ButtonGroup spaced>
          <Popover>
            <Trigger>
              <Button>Top (default)</Button>
            </Trigger>
            <Content>
              <div>i am a tooltip</div>
            </Content>
          </Popover>
          <Popover placement="left">
            <Trigger>
              <Button>Left</Button>
            </Trigger>
            <Content>
              <div>i am a popover</div>
            </Content>
          </Popover>
          <Popover placement="right">
            <Trigger>
              <Button>Right</Button>
            </Trigger>
            <Content>
              <div>i am a popover</div>
            </Content>
          </Popover>
          <Popover placement="bottom">
            <Trigger>
              <Button>Bottom</Button>
            </Trigger>
            <Content>
              <div>i am a popover</div>
            </Content>
          </Popover>
        </ButtonGroup>
        <p>Dropdowns</p>
        <ButtonGroup spaced>
          <Dropdown>
            <Trigger>
              <Button>Top (default)</Button>
            </Trigger>
            <Content>
              <div>i am a dropdown</div>
            </Content>
          </Dropdown>
          <Dropdown placement="left">
            <Trigger>
              <Button>Left</Button>
            </Trigger>
            <Content>
              <div>i am a dropdown</div>
            </Content>
          </Dropdown>
          <Dropdown placement="right">
            <Trigger>
              <Button>Right</Button>
            </Trigger>
            <Content>
              <div>i am a dropdown</div>
            </Content>
          </Dropdown>
          <Dropdown placement="bottom">
            <Trigger>
              <Button>Bottom</Button>
            </Trigger>
            <Content>
              <div>i am a dropdown</div>
            </Content>
          </Dropdown>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
);

export default TethersDemo;
