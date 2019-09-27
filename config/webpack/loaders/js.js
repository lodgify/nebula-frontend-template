const paths = require('../paths');

module.exports = () => [
  { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
  {
    test: /\.js$/,
    include: [paths.src],
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    },
  },
  { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
];
