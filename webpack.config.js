const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');
/** @type {import("@types/webpack").Configuration} */
module.exports = {
	mode: 'production',
	devtool: false,
	cache: false,
	entry: "./src/index.js",
	output: {
		path: resolve(__dirname, './lib'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	target: 'node',
	externals: {
		"./require.main": "./require.main"
	},
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
