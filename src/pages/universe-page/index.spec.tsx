import React from 'react';
import { mount } from 'enzyme';

import { UniversePage } from './index';

it('renders the heading', () => {
  const result = mount(<UniversePage />);
  expect(result).toBeTruthy();
});
