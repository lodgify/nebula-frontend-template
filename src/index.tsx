import React from 'react';
// import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/header';
import { WelcomePage } from './pages/welcome-page';
import { InfoPage } from './pages/info-page';
import { GlobalStyle } from './styles/index.style';
import { log } from './utils/logger.utils';
import Manifest from './manifest.json';

export const NebulaBaseApp: React.FC = () => {
  log(`NEBULA BASE LANDING PAGE LOADED`);
  return (
    <>
      <Header />
      <GlobalStyle />
      <WelcomePage />
    </>
  );
};

export const NebulaBaseInfo: React.FC = () => {
  log(`NEBULA BASE INFO PAGE LOADED`);
  return (
    <>
      <Header />
      <GlobalStyle />
      <InfoPage />
    </>
  );
};

// interface BaseRoute {
//   baseUrl?: string;
// }

export let RouteContext = React.createContext({ baseUrl: '' });

const Config: React.FunctionComponent = props => {
  RouteContext = React.createContext({ baseUrl: `${Manifest.url_entry_point}` });

  return <>{props.children}</>;
};

export const Routes = () => {
  log(`ULR is: ${window.location.href}`);
  log(`Available route: /${Manifest.url_entry_point}`);
  log(`Available route: /${Manifest.url_entry_point}/info`);

  const moduleRoute = `${Manifest.url_entry_point}`;

  return (
    <RouteContext.Provider value={{ baseUrl: moduleRoute }}>
      <Router>
        <Route component={Config}>
          <Route path={moduleRoute} component={NebulaBaseApp} />
          <Route path={`${moduleRoute}/info`} component={NebulaBaseInfo} />
        </Route>
      </Router>
    </RouteContext.Provider>
  );
};

if (process.env.NODE_ENV === 'development') {
  // ReactDOM.render(<NebulaBaseRoutedApp baseUrl="/poke" />, document.getElementById('root'));
}
