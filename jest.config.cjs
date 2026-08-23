/**
 * Jest configuration. The package is an ES module ("type": "module"), so test
 * files use `import`/`export` and are executed with
 * `--experimental-vm-modules` (see the `test` scripts in package.json).
 */
module.exports = {
  testEnvironment: 'node',
  transform: {},
  testMatch: [
    '<rootDir>/test/**/*.test.js',
    '<rootDir>/integration-tests/**/*.test.js',
  ],
  collectCoverageFrom: ['lib/**/*.js'],
  verbose: false,
  // Integration tests call the live Aspose Cloud API; a single case can spend
  // several seconds on OAuth token fetch + file upload + the operation itself.
  testTimeout: 60000,
};
