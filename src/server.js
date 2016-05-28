import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import Express from 'express'
import webpack from 'webpack';
import http from 'http';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.config.js';
import routes from './routes'

const app = Express()
const ip = '127.0.0.1'
const port = 8080

const compiler = webpack(config)

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: { chunks: false }
}))

app.use(WebpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}))

app.use(handleRender)

function handleRender(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(indexHtml(renderToString(<RouterContext {...renderProps} />)))
    } else {
      res.status(404).send('Not found')
    }
  })
}

const indexHtml = (context) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>React site</title>
    </head>
    <body>
      <div id="app">{context}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
}

http.createServer(app).listen(port, ip, (err) => {
  if(err) {
    return console.log(err);
  }
  console.log('Listening at ' + ip + ':' + port);
});

