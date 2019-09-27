const { runCypress } = require('./runCypress');

exports.runForLocal = async () => {
  const args = process.argv.slice(2);
  await runCypress({
    baseUrl: `http://${process.env.LOCAL_DOMAIN}:${process.env.LOCAL_PORT}`,
    args: args.length > 0 ? args : ['open'],
  });
};
