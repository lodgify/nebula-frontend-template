const { runForCi } = require('./runForCi');
const { runForLocal } = require('./runForLocal');

require('dotenv').config();

(async () => {
  if (process.env.CI === 'true') {
    console.info('Will run for CI!');
    return runForCi();
  }

  return runForLocal();
})();
