/* eslint-disable no-console, require-jsdoc */
'use strict';

const path = require('path');
const fs = require('fs');

const root = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(root, relativePath);

module.exports = {
  root,
  build: resolveApp('build'),
  src: resolveApp('src'),
};
