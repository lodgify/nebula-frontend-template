/* eslint-disable no-console */

const chalk = require('chalk');

const isDevServer = !!process.argv.find(item => /webpack-dev-server/i.test(item));

console.log('MODE IS ', process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'production') {
  const defaultNodeEnv = isDevServer ? 'development' : 'production';
  const color = isDevServer ? chalk.yellow : chalk.green;

  console.warn(color(`NODE_ENV is not set. Will default to "${defaultNodeEnv}".`));

  process.env.NODE_ENV = defaultNodeEnv;
}
