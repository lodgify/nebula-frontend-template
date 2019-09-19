import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/header';
import { WelcomePage } from './pages/welcome-page';
import { InfoPage } from './pages/info-page';
import { GlobalStyle } from './styles/index.style';

export const NebulaBaseApp: React.FC = () => (
  <>
    <Header />
    <GlobalStyle />
    <WelcomePage />
  </>
);

export const NebulaBaseInfo: React.FC = () => (
  <>
    <Header />
    <GlobalStyle />
    <InfoPage />
  </>
);

export const NebulaBaseRoutedApp: React.FC = () => (
  <Router>
    <Route path="/" exact component={NebulaBaseApp} />
    <Route path="/info" component={NebulaBaseInfo} />
  </Router>
);

if (process.env.NODE_ENV === 'development') {
  console.log('Base');
  ReactDOM.render(<NebulaBaseRoutedApp />, document.getElementById('root'));
}
