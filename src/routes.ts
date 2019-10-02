import Manifest from './manifest.json';

const isDevMode = process.env.NODE_ENV === 'development';
const moduleRoute = `${Manifest.url_entry_point}`;

export const Routes = {
  milkyWay: {
    link: isDevMode ? `/${moduleRoute}/milky-way` : `/${moduleRoute}/milky-way`,
    url: isDevMode ? `/${moduleRoute}/milky-way` : `/${moduleRoute}/milky-way`,
  },
  root: {
    link: isDevMode ? `/${moduleRoute}` : `/${moduleRoute}/`,
    url: isDevMode ? `/${moduleRoute}` : `/${moduleRoute}`,
  },
  universe: {
    link: isDevMode ? `/${moduleRoute}/universe` : `/${moduleRoute}/universe`,
    url: isDevMode ? `/${moduleRoute}/universe` : `/${moduleRoute}/universe`,
  },
};
