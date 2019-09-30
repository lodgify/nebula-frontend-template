// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const webpack = require('@cypress/webpack-preprocessor');
module.exports = on => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../config/webpack/webpack.config.dev'),
    watchOptions: {},
  };

  on('file:preprocessor', webpack(options));
};
