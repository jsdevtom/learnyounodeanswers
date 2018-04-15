const net = require('net')
const { format } = require('date-fns')

const getUserArgs = require('./get-user-args').getUserArgs

const userArgs = getUserArgs()
const portToListenTo = userArgs[0]

const server = net.createServer(onConnection)

server.listen(+portToListenTo)

function onConnection (socket) {
  const date = new Date()

  const formatedDate = format(date, 'YYYY-MM-DD HH:mm')

  socket.end(`${formatedDate}\n`)
}
