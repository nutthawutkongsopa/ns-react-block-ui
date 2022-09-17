module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        // https://jestjs.io/docs/webpack#mocking-css-modules
        "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    }
};