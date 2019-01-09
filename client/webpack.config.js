import path from "path";
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
import HtmlWebpackPlugin from "html-webpack-plugin";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname,'src','index.js'),
  output: {
    path: path.join(__dirname,'build'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname,'src'),'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname,'src')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src','index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css'
  })
  ],
  optimization: {
      minimizer: [
          new UglifyJsPlugin({
              cache: true,
              parallel: true
          }),
          new OptimizeCSSAssetsPlugin({})
      ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      }
    ]
  }
};
