# tmpl-lit-element-webpack
template for starting lit-element with webpack

# ref. guide
url - https://paulmason.co.za/2019/02/09/getting-started-with-litelement-setup/

# deps
-- install webpack deps
npm install --save-dev webpack webpack-cli webpack-dev-server copy-webpack-plugin html-webpack-plugin


-- install litelement
npm install --save lit-element

-- webcomponent polyfill
npm install --save-dev @webcomponents/webcomponentsjs

-- add webpack config
touch webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = ({ mode }) => {
  return {
    mode,
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            context: "node_modules/@webcomponents/webcomponentsjs",
            from: "**/*.js",
            to: "webcomponents"
          }
        ]
      })
    ],
    devtool: mode === "development" ? "source-map" : "none"
  };
};


# folder structure
── package.json
── src
   ── app
      └── my-app.js
  ── index.html
  ── index.js
── webpack.config.js


