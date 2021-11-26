const express = require('express')
      bodyParser = require('body-parser')
      http = require('http')
      app = express()
      server = http.createServer(app)

const router = require('./router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', router)

module.exports = { server }
