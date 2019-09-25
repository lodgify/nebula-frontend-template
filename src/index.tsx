import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/header';
import { WelcomePage } from './pages/welcome-page';
import { InfoPage } from './pages/info-page';
import { GlobalStyle } from './styles/index.style';
import { Routes as RouteHandler } from './routes';
import { log } from './utils/logger.utils';
import Manifest from './manifest.json';

import '@lodgify/quarks/build/main.css';

import { CountProvider } from './index.reducer';

export const NebulaBaseApp: React.FC = () => {
  log(`NEBULA BASE LANDING PAGE LOADED`);
  return (
    <CountProvider>
      <Header />
      <GlobalStyle />
      <WelcomePage />
    </CountProvider>
  );
};

export const NebulaBaseInfo: React.FC = () => {
  log(`NEBULA BASE INFO PAGE LOADED`);
  return (
    <CountProvider>
      <Header />
      <GlobalStyle />
      <InfoPage />
    </CountProvider>
  );
};

export let RouteContext = React.createContext({ baseUrl: '' });

const Config: React.FunctionComponent = props => <>{props.children}</>;

export const Routes = (store?: any) => {
  log(`ULR is: ${window.location.href}`);
  log(`Available route: ${RouteHandler.root.url}`);
  log(`Available route: ${RouteHandler.info.url}`);
  log(`Nebula Store is: ${store}`);

  const moduleRoute = `${Manifest.url_entry_point}`;
  RouteContext = React.createContext({
    baseUrl: `${Manifest.url_entry_point}`,
  });

  return (
    <RouteContext.Provider value={{ baseUrl: moduleRoute }}>
      <Router>
        <Route component={Config}>
          {process.env.NODE_ENV === 'development' && (
            <Route path="/" exact component={NebulaBaseApp} />
          )}
          <Route path={RouteHandler.root.url} exact component={NebulaBaseApp} />
          <Route path={RouteHandler.info.url} component={NebulaBaseInfo} />
        </Route>
      </Router>
    </RouteContext.Provider>
  );
};

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<Routes />, document.getElementById('root'));
}
