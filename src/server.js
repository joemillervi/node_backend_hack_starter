import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import { apiGETRoutes, apiPOSTRoutes } from './routes.js'


const BUILD_LOCATION = __dirname + '/../../somewhere_outside/build' 
const PORT = 42000

const app = express()
app.use(bodyParser.json({limit: '10mb'}))

// frontend
app.get('/', 
  //TODO auth.serveLoginPageIfNotAuthenticated,
  (req, res) => res.sendFile(path.join(BUILD_LOCATION, 'index.html'))
);
app.use(express.static(BUILD_LOCATION));

// API
app.get('/api/:cmd/:data?/:data2?', 
  (req, res) => apiGETRoutes(req, res)
)
app.post('/api/:cmd',
  (req, res) => apiGETRoutes(req, res)
)

// SEO
app.get('/sitemap.xml', (req, res) => res.sendFile(path.resolve('./static/sitemap.xml')))
app.get('/robots.txt', (req, res) => res.sendFile(path.resolve('./static/robots.txt')))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`)) 
