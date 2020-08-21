const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: "app",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    modules: [
      '.',
      'node_modules'
    ]
  },
};

module.exports = config;
