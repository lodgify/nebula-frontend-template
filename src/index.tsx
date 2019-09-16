import React from 'react';

import WelcomePage from './pages/welcome-page';
import { GlobalStyle } from './styles/index.style';

export const NebulaBaseApp: React.FC = () => (
  <>
    <GlobalStyle />
    <WelcomePage />
  </>
);
