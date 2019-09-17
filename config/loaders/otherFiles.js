module.exports = () => [
  {
    test: /\.(woff|ttf|otf|eot|png|jpg|ico|gif)$/,
    loader: 'file-loader',
    options: { name: '[name].[ext]' },
  },
];
