const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('../paths');
const isDevMode = process.env.NODE_ENV === 'development';

module.exports = () => {
  const styleLoader =
    process.env.NODE_ENV === 'production'
      ? MiniCssExtractPlugin.loader
      : { loader: 'style-loader' };

  return [
    {
      test: /\.css$/,
      use: [styleLoader, { loader: 'css-loader' }],
    },
    {
      test: /\.scss$/,
      use: [
        styleLoader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            sourceMap: true,
            localIdentName: isDevMode ? '[path][name]__[local]--[hash:base64:5]' : undefined,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [paths.src],
          },
        },
      ],
    },
  ];
};
