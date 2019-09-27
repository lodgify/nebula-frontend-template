import React from 'react';
import ReactDOM from 'react-dom';

import { MilkyWayPage } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MilkyWayPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
