const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.js');
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(config);

const devServer = {
	disableHostCheck: true,
	host: '0.0.0.0',
	port: 3001,
	historyApiFallback: true,
	hot: true,
	hotOnly: true,
	contentBase: path.resolve(path.resolve(__dirname), 'out'),
	publicPath: '/'
};

const server = new WebpackDevServer(compiler, devServer);

server.listen(devServer.port);
