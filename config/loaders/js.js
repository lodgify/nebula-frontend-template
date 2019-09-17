const paths = require('../paths');

module.exports = () => [
  { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
  { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
  {
    test: /\.js$/,
    include: [paths.src, paths.styleguide],
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    },
  },
];
