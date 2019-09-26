import React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

import { WelcomePage } from './pages/welcome-page';
import { InfoPage } from './pages/info-page';
import { Nebula } from './pages/nebula-container';
import { Routes as RouteHandler } from './routes';
import { log } from './utils/logger.utils';
import Manifest from './manifest.json';

import '@lodgify/quarks/build/main.css';

export let RouteContext = React.createContext({ baseUrl: '' });

const Config: React.FC = props => <Nebula>{props.children}</Nebula>;

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
      <HashRouter>
        <Config>
          <Route path={RouteHandler.root.url} exact component={WelcomePage} />
          <Route path={RouteHandler.info.url} exact component={InfoPage} />
        </Config>
      </HashRouter>
    </RouteContext.Provider>
  );
};

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<Routes />, document.getElementById('root'));
}
