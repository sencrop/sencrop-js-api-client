module.exports = {
  coverageReporters: ['lcov'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  roots: ['<rootDir>/src', '<rootDir>/test'],
};
