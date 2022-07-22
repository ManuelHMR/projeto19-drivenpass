module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\.{1,2}/.)\.js$": "$1",
  },
};