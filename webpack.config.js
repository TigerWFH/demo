/**
 * entry：入口文件(但是同样可以将代码拆分到不同的文件)。
 * 规则：SPA：只有一个入口文件；MPA：可以有多个入口文件。
 * 代码拆分：将代码拆分成多个模块，按需加载（区分代码拆分和多入口文件）。
 */

// modules
const webpack = require('webpack');
const path = require('path');

// plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

// path
const srcPath = path.join(__dirname, 'src/index.tsx');
const buildPath = path.join(__dirname, 'dist');
process.env.NODE_ENV = 'dev';
var env = process.env.NODE_ENV === "development" ? "development" : "production";
let pluginList = [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NamedModulesPlugin()
];
if (env === 'production') {
	pluginList = [
		new webpack.HashedModuleIdsPlugin(),
		new UglifyjsWebpackPlugin()
	]
}
else {
	console.log("static");
}

module.exports = {
	entry: {
		vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'antd'],
		index: srcPath,
	},
	output: {
		path: buildPath,
		filename: "js/[name].[chunkhash].js"
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
				use: ExtractTextPlugin.extract({
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
							limit: 8000,
							name: 'images/[name]-[hash:8].[ext]'
						}
					}
				]
			},
			{
				test: /\.(mp4|av)/,
				include: [path.join(__dirname, 'src')],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000,
							name: 'videos/[name]-[hash:8].[ext]'
						}
					}
				]
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.css', '.less'],
		modules: ['node_modules', './src']
	},
	// devtool: "source-map",
	target: "web",
	// externals: ["react", "react-dom", "jQuery"],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		disableHostCheck: true,
		host: '0.0.0.0',
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
		// new webpack.DefinePlugin({
		// 	"process.env": {
		// 		NODE_ENV: JSON.stringify(env)
		// 	},
		// 	"widgetsPath": path.join(__dirname, "src/widgets")
		// }),
		// new webpack.ProvidePlugin({
		// 	Widgets: path.join(__dirname, "src/widgets/index.tsx"),
		// }),
		new ExtractTextPlugin({
			filename: 'index.[contenthash].css'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new HtmlWebpackPlugin({
			title: "monkey",
			template: "src/index.html"
		}),
		new CleanWebpackPlugin(
			'dist',
			{
				root: __dirname,
				verbose: true,
				dry: false
			}
		),
		...pluginList
	]
};