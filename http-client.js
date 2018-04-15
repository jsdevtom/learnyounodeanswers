const http = require('http')
const getUserArgs = require('./get-user-args').getUserArgs

const userArgs = getUserArgs()
const urlToGet = userArgs[0]

http.get(urlToGet, response => {
  response.setEncoding('utf8')

  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
