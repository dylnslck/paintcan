const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 3000;
const host = 'localhost';

/* eslint-disable no-console */
const handleListen = err => (
  err ? console.log(err) : console.log(`Listening at http://${host}:${port}`)
);

return new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  inline: true,
  hot: true,
  historyApiFallback: true,
  colors: true,
  progress: true,
}).listen(port, host, handleListen);
