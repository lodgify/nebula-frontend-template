import Manifest from './manifest.json';

const isDevMode = process.env.NODE_ENV === 'development';
const moduleRoute = `${Manifest.url_entry_point}`;

export const Routes = {
  root: {
    url: isDevMode ? `/${moduleRoute}` : `/${moduleRoute}`,
    link: isDevMode ? `/#/${moduleRoute}` : `/${moduleRoute}/`,
  },
  info: {
    url: isDevMode ? `/${moduleRoute}/info` : `/${moduleRoute}/info`,
    link: isDevMode ? `/#/${moduleRoute}/info` : `/${moduleRoute}/info`,
  },
};
