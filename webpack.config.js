const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { SubresourceIntegrityPlugin } = require("webpack-subresource-integrity");
const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle[fullhash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    publicPath: "/",
    crossOriginLoading: "anonymous",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        generator: {
          filename: "assets/styles/[hash][ext][query]",
          dataUrl: {
            mimetype: "text/html",
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/[name].[contenthash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/assets/images", to: "./assets/images" },
        { from: "./src/assets/fonts", to: "./assets/fonts" },
        {
          from: path.resolve(__dirname, "public", "_redirects"),
          force: true,
        },
        { from: "./src/utils/*.json", to: "./assets/utility/[name][ext]" },
      ],
    }),
    new SubresourceIntegrityPlugin(),
    new DotenvWebpackPlugin(),
  ],
};
