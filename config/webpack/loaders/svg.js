module.exports = () => [
  {
    test: /\.svg$/,
    exclude: [/\.file\.svg$/],
    loader: 'svg-inline-loader',
  },
  {
    test: /\.file\.svg$/,
    loader: 'url-loader',
  },
];
