const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  // Your existing Webpack config...
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/manifest.json", to: "" },
        { from: "public/background.js", to: "" },
        { from: "public/contentScript.js", to: "" },
      ],
    }),
  ],
};
