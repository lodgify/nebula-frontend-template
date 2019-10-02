const path = require('path');

module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    path.join(__dirname, '.circleci', 'semantic'),
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
