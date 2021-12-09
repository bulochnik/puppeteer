const express = require('express')
      cors = require('cors')
      bodyParser = require('body-parser')
      http = require('http')
      app = express()
      server = http.createServer(app)

const router = require('./router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
  origin: process.env.ALLOWED_URL
}))
app.use('/api', router)

module.exports = { server }
