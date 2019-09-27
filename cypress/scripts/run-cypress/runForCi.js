const path = require('path');
const httpServer = require('http-server');
const getPort = require('get-port');

const { runCypress } = require('./runCypress');
const { rootDir } = require('./rootDir');

exports.runForCi = async () => {
  const port = await getPort();
  const serverUrl = `http://localhost:${port}`;

  const server = await startLocalServer({ port, serverUrl });

  try {
    const args = process.argv.slice(2);

    await runCypress({
      baseUrl: serverUrl,
      args: args.length > 0 ? args : ['run'],
    });
  } catch (e) {
    process.exitCode = 1;
  } finally {
    console.log(`Closing server`);
    server.close();
  }
};

const startLocalServer = async ({ port, serverUrl }) => {
  const dirAbsolute = path.join(rootDir, 'build', 'development', 'desktop');
  const dir = path.relative(process.cwd(), dirAbsolute);

  const server = httpServer.createServer({ root: dir });

  server.listen(port);
  console.log(`Server is listening on ${serverUrl} and serving ${dir}`);

  return server;
};
