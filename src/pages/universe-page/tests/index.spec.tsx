import { mount } from 'enzyme';
import React from 'react';

import { UniversePage } from '../index';

it('renders the heading', () => {
  const result = mount(<UniversePage />);
  expect(result).toBeTruthy();
});
