const fs = require('fs')
const getUserArgs = require('./get-user-args').getUserArgs

const pathToFile = getUserArgs()[0]

const fileContentsBuf = fs.readFileSync(pathToFile)

const fileContentsStr = fileContentsBuf.toString()

const numOfReturnCharsInFile = fileContentsStr.split('\n').length

const numOfLinesInFile = numOfReturnCharsInFile - 1

console.log(numOfLinesInFile)

