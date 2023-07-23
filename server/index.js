const path = require('path')
const next = require('next')
const helmet = require('helmet')
const express = require('express')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = process.env.PORT || 3100

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(helmet())
  server.use(compression())

  const staticPath = path.join(__dirname, '../public')
  server.use(
    '/public',
    express.static(staticPath, {
      maxAge: '30d',
      immutable: true
    })
  )

  // custom route pages
  server.get('/:city/:product', (req, res) => {
    return app.render(req, res, '/', { slug: req.params.slug })
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  startServer()

  function startServer() {
    server.listen(port, () => {
      console.log(`Your Apps Ready on http://localhost:${port}`)
    })
  }
})
