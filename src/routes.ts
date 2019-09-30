import Manifest from './manifest.json';

const isDevMode = process.env.NODE_ENV === 'development';
const moduleRoute = `${Manifest.url_entry_point}`;

export const Routes = {
  root: {
    url: isDevMode ? `/${moduleRoute}` : `/${moduleRoute}`,
    link: isDevMode ? `/${moduleRoute}` : `/${moduleRoute}/`,
  },
  universe: {
    url: isDevMode ? `/${moduleRoute}/universe` : `/${moduleRoute}/universe`,
    link: isDevMode ? `/${moduleRoute}/universe` : `/${moduleRoute}/universe`,
  },
  milkyWay: {
    url: isDevMode ? `/${moduleRoute}/milky-way` : `/${moduleRoute}/milky-way`,
    link: isDevMode ? `/${moduleRoute}/milky-way` : `/${moduleRoute}/milky-way`,
  },
};
