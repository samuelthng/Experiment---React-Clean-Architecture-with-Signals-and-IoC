// Stupidly required by jest.
module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // TSyringe - Jest
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "babel-plugin-transform-typescript-metadata", // TSyringe
    [
      "@babel/plugin-proposal-decorators", // TSyringe
      {
        legacy: true,
      },
    ],
    // "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-proposal-class-properties", { loose: false }], // MobX
    ["@babel/plugin-proposal-private-methods", { loose: false }], // MobX
    ["@babel/plugin-transform-private-property-in-object", { loose: false }],
  ],
  assumptions: {
    setPublicClassFields: true, // MobX
    // privateFieldsAsSymbols: true, // recommendations.
  }
};
