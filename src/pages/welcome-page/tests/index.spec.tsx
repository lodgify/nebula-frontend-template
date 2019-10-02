import { mount } from 'enzyme';
import React from 'react';

import { WelcomePage } from '../index';

it('renders the heading', () => {
  const result = mount(<WelcomePage />);
  expect(result).toBeTruthy();
});
