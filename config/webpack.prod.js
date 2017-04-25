const webpack = require("webpack");
const {resolve} = require("path");
const base = require("./webpack.base");

module.exports = Object.assign(base, {
	entry: {
		"index": [
			"./src/scripts/index.tsx"
		]
	},
	plugins: base.plugins.concat([
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				dead_code: true,
				unused: true
			}
		})
	]),
	module: {
		rules: base.module.rules.concat([
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "awesome-typescript-loader"
			},

			{
				enforce: "pre",
				test: /\.scss$/,
				loaders: [
					"style-loader",
					"css-loader?modules&camelCase",
					"typed-css-modules-loader?camelCase",
					"resolve-url-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
							includePaths: [resolve(__dirname, "../src/styles")]
						}
					}
				]
			}
		])
	}
});
