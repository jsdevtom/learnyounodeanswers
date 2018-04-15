const http = require('http')
const getUserArgs = require('./get-user-args').getUserArgs

const userArgs = getUserArgs()
const urlToGet = userArgs[0]

http.get(urlToGet, response => {
  let concatenatedResponse = ''
  response.setEncoding('utf8')

  response.on('data', data => {
    concatenatedResponse += data
  })

  response.on('end', () => {
    const numOfCharsInRes = concatenatedResponse.split('').length

    console.log(numOfCharsInRes);
    console.log(concatenatedResponse);
  })

  response.on('error', console.error)
}).on('error', console.error)
