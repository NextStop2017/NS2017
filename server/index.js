import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.js'

let app = express();

app.use(webpackMiddleware(webpack(config)));

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname,'./index.html'));
});

var PORT = 3000
app.listen(PORT, () => console.log('http://localhost:' + PORT));
