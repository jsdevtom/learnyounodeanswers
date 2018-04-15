const filterFilesByExtension = require('./filter-files-by-extension')
const getUserArgs = require('./get-user-args').getUserArgs

const userArgs = getUserArgs()
const pathToDir = userArgs[0]
const fileExtensionToFilter = userArgs[1]

filterFilesByExtension(pathToDir, fileExtensionToFilter, (err, filteredFiles) => {
  if (err) {
    console.error('There was an error :', err)
  }

  filteredFiles.forEach(filteredFile => console.log(filteredFile))
})
