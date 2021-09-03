/**
 * @jest-environment jsdom
 */

module.exports = {
    displayName: 'client',
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testEnvironment: 'jsdom'
  };
  