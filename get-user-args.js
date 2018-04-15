module.exports.getUserArgs = function getUserArgs (USER_ARGS_START_INDEX = 2) {
  const USER_ARGS_END_INDEX = process.argv.length
  const userArgs = process.argv.slice(USER_ARGS_START_INDEX, USER_ARGS_END_INDEX)
  return userArgs
}
