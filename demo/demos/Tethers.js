/* eslint-disable no-alert */
import React, { PropTypes } from 'react';

import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Content,
  Container,
  Row,
  Tether,
  Trigger,
} from '../../src';

const ClickTrigger = ({ children }, { toggleTether, isOpen }) => (
  <Button onClick={toggleTether} active={isOpen}>
    {children}
  </Button>
);

ClickTrigger.propTypes = {
  children: PropTypes.any,
};

ClickTrigger.contextTypes = {
  toggleTether: PropTypes.func,
  isOpen: PropTypes.bool,
};

const TooltipTrigger = ({ children }, { showTether, hideTether, isOpen }) => (
  <Button onMouseEnter={showTether} onMouseLeave={hideTether} active={isOpen}>
    {children}
  </Button>
);

TooltipTrigger.propTypes = {
  children: PropTypes.any,
};

TooltipTrigger.contextTypes = {
  showTether: PropTypes.func,
  hideTether: PropTypes.func,
  isOpen: PropTypes.bool,
};

const PopoverTrigger = ({
  children,
}, {
  showTether,
  hideTether,
  contentNode,
  isOpen,
}) => {
  const handleTriggerLeave = (e) => {
    const { relatedTarget } = e;

    const shouldHideTether = (
      contentNode !== relatedTarget &&
      !contentNode.contains(relatedTarget)
    );

    if (shouldHideTether) hideTether();
  };

  return (
    <Button onMouseEnter={showTether} onMouseLeave={handleTriggerLeave} active={isOpen}>
      {children}
    </Button>
  );
};

const PopoverContent = ({ children }, { hideTether, triggerNode }) => {
  const handleContentLeave = (e) => {
    const { relatedTarget } = e;

    const shouldHideTether = (
      triggerNode !== relatedTarget &&
      !triggerNode.contains(relatedTarget)
    );

    if (shouldHideTether) hideTether();
  };

  return (
    <Card onMouseLeave={handleContentLeave}>
      {children}
    </Card>
  );
};

PopoverTrigger.propTypes = {
  children: PropTypes.any,
};

PopoverTrigger.contextTypes = {
  isOpen: PropTypes.bool,
  triggerNode: PropTypes.object,
  contentNode: PropTypes.object,
  showTether: PropTypes.func,
  hideTether: PropTypes.func,
};

PopoverContent.propTypes = {
  children: PropTypes.any,
};

PopoverContent.contextTypes = {
  isOpen: PropTypes.bool,
  triggerNode: PropTypes.object,
  hideTether: PropTypes.func,
};

const TethersDemo = () => (
  <Container>
    <Row>
      <Col>
        <h2>Tethers</h2>
        <hr></hr>
        <p>General tethers</p>
        <ButtonGroup spaced>
          <Tether leaveOnDocumentClick>
            <Trigger>
              <ClickTrigger>
                Tether on click
              </ClickTrigger>
            </Trigger>
            <Content>
              <Card>
                This should hide when you click outside of the box or on the button
              </Card>
            </Content>
          </Tether>
          <Tether>
            <Trigger>
              <TooltipTrigger>
                Tether on hover
              </TooltipTrigger>
            </Trigger>
            <Content>
              <Card>
                This should hide when your mouse leaves the trigger
              </Card>
            </Content>
          </Tether>
          <Tether>
            <Trigger>
              <PopoverTrigger>
                Tether on hover
              </PopoverTrigger>
            </Trigger>
            <Content>
              <PopoverContent>
                This should hide when your mouse leaves the content
              </PopoverContent>
            </Content>
          </Tether>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
);

export default TethersDemo;
