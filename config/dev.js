const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.conf');
const opn = require('open');
const chalk = require('chalk');

const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 8081;
const options = {
  host           : DEFAULT_HOST,
  port           : DEFAULT_PORT,
  contentBase    : 'src',
  stats          : 'minimal',
  clientLogLevel : 'none',
  watchOptions   : { poll: true },
  hot            : true,
  compress       : true,
  inline         : true,
  overlay        : true
};

const {log} = console;

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(DEFAULT_PORT, DEFAULT_HOST, (err) => {
  if (err) {
    log(chalk.red(err));
  }
  log(`${chalk.green('WebpackDevServer listening at localhost:')} ${chalk.underline.green(DEFAULT_PORT)}`);
  opn(`http://${DEFAULT_HOST}:${DEFAULT_PORT}`);
});
