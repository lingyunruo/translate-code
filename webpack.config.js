const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		"main": path.join(__dirname, "./example/source-code/main.js")
	},
	output: {
		path: path.join(__dirname, './example/build'),
		filename: '[name].js'
	},
	watch: false,
	watchOptions: {
		aggregateTimeout: 1000,
		poll: 1000
	},
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, './example/build'),
		compress: false,
		port: 9000
	},
	resolve: {
		alias: {
			actions: path.join(__dirname, './example/source-code/actions/'),
			models: path.join(__dirname, './example/source-code/models/'),
			components: path.join(__dirname, './example/source-code/components/'),
			common: path.join(__dirname, './example/source-code/common/')
		}
	},
	devtool: 'cheap-module-source-map',
	module: {
		rules: [{
			test: /\.js/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react'],
					plugins: [
						'transform-decorators-legacy',
						'transform-object-rest-spread',
						'transform-class-properties'
					]
				}
			}
		}, {
            test: /\.less|\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "less-loader"]
            })
        }]
	},
	plugins: [
        new ExtractTextPlugin("[name].css")
	]
};
