const webpack = require("webpack");
const {resolve} = require("path");
const base = require("./webpack.base");

module.exports = Object.assign(base, {
	entry: {
		"index": [
			"react-hot-loader/patch",
			"webpack/hot/only-dev-server",
			"./src/scripts/index.tsx"
		]
	},
	devServer: {
		hot: true,
		contentBase: "./dist"
	},
	plugins: base.plugins.concat([
		new webpack.WatchIgnorePlugin([
			/.*\.scss\.d\.ts/
		]),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]),
	module: {
		rules: base.module.rules.concat([
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loaders: [
					"react-hot-loader/webpack",
					"awesome-typescript-loader"
				]
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
	},
	devtool: "eval-source-map"
});
