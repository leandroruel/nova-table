const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.conf');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output:  {
    filename: 'nova-table.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  }
});
