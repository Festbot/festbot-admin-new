const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	devtool: 'source-map',
	entry: {
		app: [
			'webpack-dev-server/client?http://127.0.0.1:3006',
			'webpack/hot/only-dev-server'
		]
	},
	mode: 'development',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
});
