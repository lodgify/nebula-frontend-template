const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

require('./env');
const paths = require('./paths');
const sassLoader = require('./loaders/sass');
const otherFilesLoader = require('./loaders/otherFiles');
const jsLoader = require('./loaders/js');
const svgLoader = require('./loaders/svg');

const mode = process.env.NODE_ENV;

module.exports = {
  mode,
  devtool: 'source-map',
  target: 'node',
  module: {
    rules: [...jsLoader(), ...sassLoader(), ...otherFilesLoader(), ...svgLoader()],
  },
  output: {
    path: paths.build,
    filename: '[name].js',
    library: 'nebula',
    libraryTarget: 'umd',
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  externals: [nodeExternals({ whitelist: [/\.css/i] }), 'react', 'react-dom'],
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new webpack.EnvironmentPlugin({ ...process.env }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      openAnalyzer: false,
    }),
  ],
};
