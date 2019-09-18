module.exports = () => [
  {
    test: /\.(woff|ttf|otf|eot|png|jpg|ico|gif)$/,
    loader: 'url-loader',
    options: {
      name: 'assets/[name].[hash].[ext]',
      publicPath: 'assets',
    },
  },
];
