import React from 'react';
import ReactDOM from 'react-dom';

import { UniversePage } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UniversePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
