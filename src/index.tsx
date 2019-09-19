import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/header';
import { WelcomePage } from './pages/welcome-page';
import { InfoPage } from './pages/info-page';
import { GlobalStyle } from './styles/index.style';
import Manifest from './manifest.json';

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

interface BaseRoute {
  baseUrl?: string;
}

export const RouteContext = React.createContext({ baseUrl: '' });

export const NebulaBaseRoutedApp: React.FC<BaseRoute> = ({ baseUrl = Manifest.short_name }) => (
  <RouteContext.Provider value={{ baseUrl }}>
    <Router>
      <Route path={`/`} exact component={NebulaBaseApp} />
      <Route path={`/${baseUrl}/`} exact component={NebulaBaseApp} />
      <Route path={`/${baseUrl}/info`} component={NebulaBaseInfo} />
    </Router>
  </RouteContext.Provider>
);

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<NebulaBaseRoutedApp />, document.getElementById('root'));
}
