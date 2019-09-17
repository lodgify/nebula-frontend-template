/* eslint-disable no-console */

const chalk = require('chalk');

const isDevServer = require('./isDevServer');

if (
  process.env.NODE_ENV !== 'development' &&
  process.env.NODE_ENV !== 'production'
) {
  const defaultNodeEnv = isDevServer ? 'development' : 'production';
  const color = isDevServer ? chalk.yellow : chalk.green;

  console.warn(
    color(`NODE_ENV is not set. Will default to "${defaultNodeEnv}".`)
  );

  process.env.NODE_ENV = defaultNodeEnv;
}
