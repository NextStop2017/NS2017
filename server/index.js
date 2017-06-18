import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.js';

// Create a new Express Instance
let app = express();

// Prevent hackers from hacking
app.disable('x-powered-by');

const compiler = webpack(config);

//It serves the files emitted from webpack over a connect server. This should be used for development only.
app.use(webpackMiddleware(compiler, {
  // webpackMiddleware takes a Compiler object as first parameter
  // which is returned by webpack(...) without callback.
  hot: true,
  publicPath: config.output.publicPath,  // publicPath is required, whereas all other options are optional
  noInfo: true // display no info to console (only warnings and errors)
}));

app.use(webpackHotMiddleware(compiler));

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname,'./index.html'));
});

var PORT = 3000

app.listen(PORT, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000/');
});
