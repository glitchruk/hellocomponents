const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'src/index.tsx',
		library: 'HelloComponents',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	externals: [
		nodeExternals()
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
};

