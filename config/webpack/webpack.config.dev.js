const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const sassLoader = require('./loaders/sass');

require('dotenv').config();

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    port: process.env.LOCAL_PORT,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: paths.dev,
    filename: 'main.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      ...sassLoader(),
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(woff|ttf|otf|eot|png|jpg|ico|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[hash].[ext]',
        },
      },
      {
        test: /\.(tsx?$|ts?$)/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
