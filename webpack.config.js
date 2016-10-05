var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
	devtool: 'source-map',

	entry: [
		'webpack-dev-server/client?http://0.0.0.0:1337',
		'webpack/hot/only-dev-server',
		'./src/index'
	],

	output: {
		path: "build",
		filename: "app.js",
		sourceMapFilename: '[file].map'
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ["babel-loader"],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loaders: ["style-loader", "css-loader"]
			},
			{
				test: /\.png$/,
				loaders: ["url-loader?limit=16384"]
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	]
};

module.exports = webpackConfig;