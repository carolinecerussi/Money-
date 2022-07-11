const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist'),
  BASE_URL: 'https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP',
  API_KEY: process.env.API-KEY,


  },
  devtool: 'eval-source-map',
  devServer: {               
  contentBase: './dist'    
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'money',
      template: './src/index.html',
      inject: 'body'
    }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};