const Upper = require('./upper')

const http = require('http')
const getUserArgs = require('./get-user-args').getUserArgs

const userArgs = getUserArgs()
const portToListenTo = userArgs[0]

const server = http.createServer(onConnection)

server.listen(+portToListenTo)

function onConnection (req, res) {
  if (req.method === 'POST') {
    req.pipe(new Upper()).pipe(res)
  }
}
