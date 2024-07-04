module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    testEnvironment: "jsdom",
    transformIgnorePatterns: ["<rootDir>/node_modules/"]
  };