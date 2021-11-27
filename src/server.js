require('dotenv').config()

const { server } = require('./index')

const SERVER_PORT = process.env.PORT
const SERVER_URL = process.env.SERVER_URL

const start = async () => {
  try {
    server.listen(SERVER_PORT, () => {
      console.log(`Server is running on http://${SERVER_URL}:${SERVER_PORT}`)
      server.on('error', () => console.log(`\n\n\n\n\nERROR\n\n\n\n\n`))
    })
  } catch (error) {
    console.log('Server error', error.message)
    process.exit(1)
  }
}

start()
