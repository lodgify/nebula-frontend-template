const isDevServer = !!process.argv.find(item =>
  /webpack-dev-server/i.test(item)
);

module.exports = isDevServer;
