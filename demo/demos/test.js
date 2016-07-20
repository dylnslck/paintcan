import React from 'react';
import {
  Button,
  Card,
} from '../../src';
import withSelect from '../../src/wrappers/withSelect';

const JobSelect = withSelect(
  ({ isOpen, toggleSelect, item }) => (
    <Button active={isOpen} onClick={toggleSelect}>
      {item ? item.label : 'Select'}
    </Button>
  ),
  ({ onSelect, items }) => (
    <Card>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onSelect(item)}>
            {item.label}
          </li>
        ))}
      </ul>
    </Card>
  )
);

export default JobSelect;
