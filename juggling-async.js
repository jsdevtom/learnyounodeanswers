const http = require('http')
const getUserArgs = require('./get-user-args').getUserArgs

const userArgs = getUserArgs()
const urlsToGet = userArgs

function printContentToConsole (contents) {
  contents.forEach(c => console.log(c))
}

Promise.all(urlsToGet.map(url => getContent(url)))
  .then(printContentToConsole)

function getContent (urlToGet) {
  return new Promise((resolve, reject) => {
    http.get(urlToGet, response => {
      let concatenatedResponse = ''
      response.setEncoding('utf8')

      response.on('data', data => {
        concatenatedResponse += data
      })

      response.on('end', () => {
        resolve(concatenatedResponse)
      })

      response.on('error', reject)
    }).on('error', console.error)
  })
}
