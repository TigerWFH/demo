const path = require('path');
const srcPath = path.join(__dirname, 'src/index.tsx');
const test = path.join(__dirname, 'src/test.tsx');
const buildPath = path.join(__dirname, 'dist');
// 抽取css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({ filename: '[name].css', allChunks: true });

module.exports = {
	entry: {
		index: srcPath,
		test: test
	},
	output: {
		path: buildPath,
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				include: [path.join(__dirname, 'src')],
				use: ['awesome-typescript-loader']
			},
			{
				test: /\.less$/,
				include: [path.join(__dirname, 'src')],
				use: extractCSS.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader']
				})
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.less']
	},
	devtool: "source-map",
	target: "web",
	externals: ["react", "react-dom", "jQuery"],
	devServer: {},
	plugins: [
		extractCSS
	]
};