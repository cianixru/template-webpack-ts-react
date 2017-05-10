const {resolve, join} = require("path");

const ROOT = "./src";
const paths = {
	dist: resolve("dist"),
	htmlIndex: `${ROOT}/assets/index.ejs`,
	icon: `${ROOT}/assets/icon.png`,
	scriptsName: "scripts",
	src: ROOT,
	stylesName: "styles",
	static: `${ROOT}/assets/static`,
	get tsIndex() { return `${ROOT}/${this.scriptsName}/index.tsx`; }
};

module.exports = {
	loaders: {
		css: [
			{
				loader: "typings-for-css-modules-loader",
				options: {
					namedExport: true,
					modules: true,
					camelCase: true,
					localIdentName: "[folder]__[local]--[hash:base64:4]",
					importLoaders: 1,
					minimize: process.env.NODE_ENV === "production"
				}
			},

			{
				loader: "postcss-loader",
				options: require("./postcss.config")
			},

			"resolve-url-loader",

			{
				loader: "sass-loader",
				options: {
					sourceMap: process.env.NODE_ENV === "development",
					includePaths: [resolve(__dirname, join("..", paths.src, paths.stylesName))]
				}
			}
		]
	},
	paths: paths
};
