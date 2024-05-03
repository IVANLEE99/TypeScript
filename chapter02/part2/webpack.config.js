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
    environment: {
      arrowFunction: false,
      const: false,
    },
  },
  //指定打包时候webpack 需要使用的模块
  module: {
    //指定加载的规则
    rules: [
      {
        //test指定规则生效的文件
        test: /\.ts$/,
        //执行顺序是从数组的后面往后面执行
        use: [
          //配置babel
          {
            //指定加载器
            // https://www.npmjs.com/package/babel-loader
            // https://www.npmjs.com/package/@babel/preset-env
            // https://babeljs.io/docs/babel-preset-env
            loader: "babel-loader",
            // 配置babel
            options: {
              //配置与定义的环境
              presets: [
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    //要兼容的目标浏览器
                    targets: {
                      chrome: "58",
                      ie: "11",
                    },
                    //指定corejs的版本
                    corejs: "3",
                    //使用corejs的方式"usage"表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            // https://www.npmjs.com/package/postcss-loader
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
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
    extensions: [".ts", ".js", ".less"],
  },
};
