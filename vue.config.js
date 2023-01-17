const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin(),
      new MyAwesomeWebpackPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  // devServer: {
  //   https: true
  // },
});