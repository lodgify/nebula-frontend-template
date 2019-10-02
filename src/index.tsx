import '@lodgify/quarks/build/main.css';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Manifest from './manifest.json';
import { MilkyWayPage } from './pages/milky-way-page';
import { Nebula } from './pages/nebula-container';
import { UniversePage } from './pages/universe-page';
import { WelcomePage } from './pages/welcome-page';
import { Routes as RouteHandler } from './routes';
import { log } from './utils/logger.utils';

export let RouteContext = React.createContext({ baseUrl: '' });

const Config: React.FC = props => <Nebula>{props.children}</Nebula>;

export const Routes = () => {
  log(`ULR is: ${window.location.href}`);
  log(`Available route: ${RouteHandler.root.url}`);
  log(`Available route: ${RouteHandler.universe.url}`);
  log(`Available route: ${RouteHandler.milkyWay.url}`);

  const moduleRoute = `${Manifest.url_entry_point}`;
  RouteContext = React.createContext({
    baseUrl: `${Manifest.url_entry_point}`,
  });

  return (
    <RouteContext.Provider value={{ baseUrl: moduleRoute }}>
      <HashRouter>
        <Config>
          <Switch>
            <Route path={RouteHandler.root.url} exact component={WelcomePage} />
            <Route path={RouteHandler.universe.url} exact component={UniversePage} />
            <Route path={RouteHandler.milkyWay.url} exact component={MilkyWayPage} />
            <Route path="/" component={WelcomePage} />
            <Redirect to="/" />
          </Switch>
        </Config>
      </HashRouter>
    </RouteContext.Provider>
  );
};

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<Routes />, document.getElementById('root'));
}
