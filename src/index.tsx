import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { configureStore } from './redux/index';

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

const moduleStore = createStore(configureStore);

export let RouteContext = React.createContext({ baseUrl: '', store: undefined });

interface ConfigProps extends React.FunctionComponent {
  store?: any;
}

const Config: React.FunctionComponent<ConfigProps> = props => {
  return (
    <RouteContext.Consumer>
      {({ store }) => <Provider store={store || moduleStore}>{props.children}</Provider>}
    </RouteContext.Consumer>
  );
};

export const Routes = (store?: any) => {
  log(`ULR is: ${window.location.href}`);
  log(`Available route: /${Manifest.url_entry_point}`);
  log(`Available route: /${Manifest.url_entry_point}/info`);

  const moduleRoute = `${Manifest.url_entry_point}`;
  RouteContext = React.createContext({ baseUrl: `${Manifest.url_entry_point}`, store });
  log(`Nebula Store is: ${store}`);

  return (
    <RouteContext.Provider value={{ baseUrl: moduleRoute, store }}>
      <Router>
        <Route component={Config}>
          {process.env.NODE_ENV === 'development' && <Route path="/" component={NebulaBaseApp} />}
          <Route path={moduleRoute} component={NebulaBaseApp} />
          <Route path={`${moduleRoute}/info`} component={NebulaBaseInfo} />
        </Route>
      </Router>
    </RouteContext.Provider>
  );
};

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<Routes />, document.getElementById('root'));
}
