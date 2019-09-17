import React from 'react';
import * as ReactDOM from 'react-dom';

import WelcomePage from './pages/welcome-page';
import { GlobalStyle } from './styles/index.style';

export const NebulaBaseApp: React.FC = () => (
  <>
    <GlobalStyle />
    <WelcomePage />
  </>
);

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<NebulaBaseApp />, document.getElementById('root'));
}
