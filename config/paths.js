/* eslint-disable strict */
'use strict';

const path = require('path');
const fs = require('fs');

const root = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(root, relativePath);

module.exports = {
  root,
  build: resolveApp('build'),
  src: resolveApp('src'),
  dev: resolveApp('dist'),
};
