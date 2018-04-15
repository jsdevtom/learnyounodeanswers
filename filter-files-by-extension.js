const fs = require('fs')
const path = require('path')

module.exports = function filterFilesByExtension (dirName, fileNameExtension, cb) {
  fs.readdir(dirName, onDirRead)

  function onDirRead (err, files) {
    if (err) {
      return cb(err)
    }

    const filteredFiles = filterExtension(files, fileNameExtension)

    cb(null, filteredFiles)
  }
}

function filterExtension (files, fileExtensionToFilter) {
  // Also possible:
  // return files.filter(dir => dir.endsWith(`.${fileExtensionToFilter}`))
  return files.filter(file => path.extname(file) === `.${fileExtensionToFilter}`)
}
