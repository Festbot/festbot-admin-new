module.exports = storybookBaseConfig => {
	storybookBaseConfig.module.rules.push({
		test: /\.(jsx|js)$/,
		loader: require.resolve('babel-loader'),
		exclude: /(node_modules)/
	});

	return storybookBaseConfig;
};
