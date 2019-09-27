const platform = require('os').platform();
const spawn = require('child_process').spawn;

const { rootDir } = require('./rootDir');

exports.runCypress = async ({ baseUrl, args = ['run'] }) => {
  return new Promise(resolve => {
    // We need to change the command path based on the platform they're using
    const cmd = /^win/.test(platform)
      ? `${rootDir}\\node_modules\\.bin\\cypress.cmd`
      : `${rootDir}/node_modules/.bin/cypress`;

    const tests = spawn(cmd, args, {
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_OPTIONS: undefined,
        CYPRESS_baseUrl: baseUrl,
        TZ: 'Asia/Taipei',
      },
      windowsVerbatimArguments: true,
    });

    tests.on('close', (code, signal) => {
      console.log(`Tests finished!`);
      if (code) {
        throw new Error(`Cypress: ${signal}, exit code ${code}`);
      }

      resolve();
    });
  });
};
