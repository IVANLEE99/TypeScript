const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "production", //Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
  //指定入口
  entry: "./src/index.ts",
  //指定打包文件所在目录
  output: {
    //指定文件打包的目录
    path: path.resolve(__dirname, "dist"),
    //打包后的文件
    filename: "bundle.js",
  },
  //指定打包时候webpack 需要使用的模块
  module: {
    //指定加载的规则
    rules: [
      {
        //test指定规则生效的文件
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), //https://www.npmjs.com/package/clean-webpack-plugin
    // https://www.npmjs.com/package/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  //用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
