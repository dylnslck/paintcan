const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'paintcan',
    libraryTarget: 'commonjs',
  },
  externals: {
    'react-dom': 'react-dom',
    'react-motion': 'react-motion',
    'react-fa': 'react-fa',
    'react-tether': 'react-tether',
    react: 'react',
    flexboxgrid: 'flexboxgrid',
    classnames: 'classnames',
    lodash: 'lodash',
    tether: 'tether',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|demo)/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel'],
      },
      {
        test: /\.css$/,
        exclude: /(demo)/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css'
        ),
      },
      {
        test: /\.scss$/,
        exclude: /(demo)/,
        loader: ExtractTextPlugin.extract('style', [
          'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]',
          'postcss',
          'sass',
        ]),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /(demo)/,
        loader: 'url-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /(demo)/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('paintcan.css'),
  ],
  postcss() {
    return [precss, autoprefixer];
  },
};
