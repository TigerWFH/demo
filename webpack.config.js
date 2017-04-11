const path = require('path');
const srcPath = path.join(__dirname, 'src/index.tsx');
const buildPath = path.join(__dirname, 'dist');

module.exports = {
	entry: srcPath,
	output: {
		filename: 'index.js',
		path: buildPath
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
				use: ['style-loader', 'css-loader', 'less-loader']
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
	plugins: []
};