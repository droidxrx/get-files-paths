const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');
/** @type {import("@types/webpack").Configuration} */
module.exports = {
	mode: 'production',
	devtool: false,
	cache: false,
	entry: { index: resolve(__dirname, './src/') },
	output: {
		path: resolve(__dirname, './lib'),
		filename: '[name].js',
		libraryTarget: 'commonjs2',
	},
	target: 'node',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				terserOptions: {
					format: {
						comments: false,
					},
				},
			}),
		],
	},
};
