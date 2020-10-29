const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    app: "./public/js/main.js"
  },
  output: {
    // filename: "./public/js/build.js",
    filename: "[name].build.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./public",
    port: 3000,
    publicPath: "./public/js",
    watchContentBase: true
  },
  // configureWebpack: {
  //   externals: {
  //     vue: "vue"
  //   }
  // }
};
