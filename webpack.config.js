import webpack from 'webpack';
import path from 'path';

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "client");

var config = {
	entry: path.join(__dirname,"/client/index.js"),
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				include: path.join(__dirname, "client"),
				loader: "babel-loader",
				query: {
					presets:["react","es2015","stage-2"]
				}
			}
		]
	},
	resolve:{
		extensions: ['*', '.js']
	},
	devServer: {
		historyApiFallback:true
	},
	plugins: [
       new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         options: {
           devtools: "eval-source-map",
         }
       })
     ]
};

module.exports = config;
