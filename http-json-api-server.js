const http = require('http')
const url = require('url')
const getUserArgs = require('./get-user-args').getUserArgs

const userArgs = getUserArgs()
const portToListenTo = userArgs[0]

const ISO_API_PATH = '/api/parsetime?iso='
const UNIX_API_PATH = '/api/unixtime?iso='

const server = http.createServer(onConnection)

server.listen(+portToListenTo)

function sendResult (req, resultToReturn, date, res) {
  if (req.url.startsWith(ISO_API_PATH)) {
    resultToReturn = parsetime(date)
  }

  if (req.url.startsWith(UNIX_API_PATH)) {
    resultToReturn = unixtime(date)
  }

  res.writeHead('200', {'Content-Type': 'application/json'})

  return res.end(JSON.stringify(resultToReturn))
}

function onConnection (req, res) {
  const parsedUrl = url.parse(req.url, true)
  const date = new Date(parsedUrl.query.iso)
  let resultToReturn;

  if (isNaN(date.getTime()) || req.method !== 'GET') {
    res.status(500)
    return res.end('error')
  }

  return sendResult(req, resultToReturn, date, res)
}

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

