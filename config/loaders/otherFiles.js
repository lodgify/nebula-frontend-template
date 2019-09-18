module.exports = () => [
  {
    test: /\.(woff|ttf|otf|eot|png|jpg|ico|gif)$/,
    loader: 'file-loader',
    options: {
      name: 'assets/[name].[hash].[ext]',
      publicPath: 'assets',
    },
  },
];
