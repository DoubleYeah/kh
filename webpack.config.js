var webpack = require('webpack');
var path = require('path');
var SplitChunks = webpack.optimize.splitChunks;
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: './index.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules:[
			{test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader'},
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	},
	plugins: [
		//new SplitChunks('init.js'),
		new OpenBrowserPlugin({url: 'http://localhost:8080'})
	]
};