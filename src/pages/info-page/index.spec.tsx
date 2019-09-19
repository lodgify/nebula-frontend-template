import React from 'react';
import ReactDOM from 'react-dom';

import { InfoPage } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
