import { mount } from 'enzyme';
import React from 'react';

import { MilkyWayPage } from '../index';

it('renders the heading', () => {
  const result = mount(<MilkyWayPage />);
  expect(result).toBeTruthy();
});
