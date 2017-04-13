const path = require('path');
const srcPath = path.join(__dirname, 'src/index.tsx');
const test = path.join(__dirname, 'src/test.tsx');
const buildPath = path.join(__dirname, 'dist');
// 抽取css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin("css/index.css");

module.exports = {
	entry: {
		index: srcPath
	},
	output: {
		path: buildPath,
		filename: "js/[name].js"
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
			},
			{
				test: /\.(jpg|jpeg|png|gif)/,
				include: [path.join(__dirname, 'src')],
				use: ['url-loader']
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.less']
	},
	devtool: "source-map",
	target: "web",
	// externals: ["react", "react-dom", "jQuery"],
	devServer: {},
	plugins: [
		extractCSS
	]
};