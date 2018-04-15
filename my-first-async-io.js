const fs = require('fs')
const getUserArgs = require('./get-user-args').getUserArgs

const pathToFile = getUserArgs()[0]

fs.readFile(pathToFile, onReadFileFinished)

function onReadFileFinished (err, data) {
  if (err) {
    console.error(err)
  }
  countLinesInFile(data)
}

function countLinesInFile (fileContentsBuf) {
  const fileContentsStr = fileContentsBuf.toString()

  const numOfReturnCharsInFile = fileContentsStr.split('\n').length

  const numOfLinesInFile = numOfReturnCharsInFile - 1

  console.log(numOfLinesInFile)
}

