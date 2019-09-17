const mode = process.env.NODE_ENV;
const isDevMode = mode === 'development';

module.exports = isDevMode;
