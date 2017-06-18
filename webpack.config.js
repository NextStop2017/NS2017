import webpack from 'webpack';
import path from 'path';

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "client");

var config = {
	entry: [
		// activate HMR for React
		'react-hot-loader/patch',

		'webpack-hot-middleware/client',

		// bundle the client for hot reloading
		// only- means to only hot reload for successful updates
		'webpack/hot/only-dev-server',

		//Your app's entry point
		path.join(__dirname,"/client/index.js"),
	],
	output: {
		path: "/",
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
	  rules: [
	    {
	      test: /\.jsx?$/,   // Match both .js and .jsx files
	      exclude: /node_modules/,
				loader: "babel-loader",
	    }
	  ]
	},
	resolve:{
		extensions: ['*', '.js']
	},
	devServer: {
		host: 'localhost',
		port: 3000,
		historyApiFallback:true,
		hot:true,
	},
	plugins: [
			new webpack.HotModuleReplacementPlugin(), /// enable HMR globally
			new webpack.NoEmitOnErrorsPlugin(), // do not emit compiled assets that include errors
			new webpack.optimize.OccurrenceOrderPlugin(), //ensure consistentce build hashes
			new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
				options: {
           devtools: "inline-source-map",
        },
				debug:true,
       }),

     ]
};

module.exports = config;
