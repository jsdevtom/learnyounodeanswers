const fs = require('fs')
const path = require('path')
const getUserArgs = require('./get-user-args').getUserArgs

const userArgs = getUserArgs()
const pathToDir = userArgs[0]
const fileExtensionToFilter = userArgs[1]

fs.readdir(pathToDir, onDirRead)

function onDirRead (err, files) {
  if (err) {
    console.error('There was an error :', err)
  }

  const filteredFiles = filterExtension(files, fileExtensionToFilter)

  filteredFiles.forEach(filteredFile => console.log(filteredFile))
}

function filterExtension (files, fileExtensionToFilter) {
  // Also possible:
  // return files.filter(dir => dir.endsWith(`.${fileExtensionToFilter}`))
  return files.filter(file => path.extname(file) === `.${fileExtensionToFilter}`)
}
