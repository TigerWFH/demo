const webpack = require('webpack');
const path = require('path');
const srcPath = path.join(__dirname, 'src/index.tsx');
const test = path.join(__dirname, 'src/test.tsx');
const buildPath = path.join(__dirname, 'dist');
// 抽取css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin("css/index.css");
// let isUsingMock = true;
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
					use: [
						{
							loader: 'css-loader',
							options: {
								// root: '.',
								// modules: true,
								// importLoaders: 1,
								// minimize: true,
								// camelCase: true
							}
						},
						'less-loader']
				})
			},
			{
				test: /\.(jpg|jpeg|png|gif)/,
				include: [path.join(__dirname, 'src')],
				// 暂时把所有image编码为base64
				use: [
					{
						loader: 'url-loader',
						options: {
							// limit: 8000
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.less']
	},
	// devtool: "source-map",
	target: "web",
	// externals: ["react", "react-dom", "jQuery"],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		watchContentBase: true,
		hot: true,
		noInfo: true,
		// quiet: true,
		proxy: {
			"/v1": "http://localhost:9000"
		}
	},
	plugins: [
		extractCSS,
		new webpack.HotModuleReplacementPlugin()
	]
};