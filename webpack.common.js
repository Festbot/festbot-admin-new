const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: ['./src/index.jsx']
	},
	resolve: {
		enforceExtension: false,
		extensions: ['.js', '.jsx'],
		mainFiles: ['index']
	},
	output: {
		path: path.join(__dirname, './out/'),
		filename: '[name].[hash].js',
		chunkFilename: '[id].[hash].bundle.js',
		sourceMapFilename: '[file]-[hash].map',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				loader: require.resolve('babel-loader'),
				exclude: /(node_modules)/,
				options: {
					cacheDirectory: true
				}
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	]
};
