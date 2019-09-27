const fs = require('fs');
const path = require('path');
const semver = require('semver');

// This comes from https://github.com/semantic-release/npm/blob/beta/lib/get-channel.js
const getChannel = channel =>
  channel
    ? semver.validRange(channel)
      ? `release-${channel}`
      : channel
    : 'latest';

async function verifyRelease(
  pluginConfig,
  { nextRelease: { version, channel }, logger }
) {
  const distTag = getChannel(channel);

  fs.writeFileSync(path.join(process.cwd(), '.version'), version, {
    encoding: 'utf-8',
  });

  fs.writeFileSync(path.join(process.cwd(), '.dist-tag'), distTag, {
    encoding: 'utf-8',
  });

  logger.log(
    `Version number ${version} written to file ".version" and dist tag "${distTag}" written to ".dist-tag"`
  );
}

module.exports = { verifyRelease };
