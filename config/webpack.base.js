const {resolve} = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	output: {
		path: resolve("dist"),
		filename: "scripts/[name].js",
		publicPath: "/"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000"
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	},
	plugins: [
		new CopyPlugin([
			{from: "src/assets/static"}
		])
	]
};
