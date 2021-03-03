module.exports = {
  preset: 'ts-jest',
  transform: { '^.+\\ts$': 'ts-jest' },
  testEnvironment: 'node',
  testRegex: 'tests/.+\\.test\\.ts',
};
