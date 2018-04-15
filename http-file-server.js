const http = require('http')
const fs = require('fs')

const getUserArgs = require('./get-user-args').getUserArgs

const userArgs = getUserArgs()
const portToListenTo = userArgs[0]
const fileToServe = userArgs[1]

const server = http.createServer(onConnection)

server.listen(+portToListenTo)

function onConnection (req, res) {
  fs.createReadStream(fileToServe).pipe(res)
}
