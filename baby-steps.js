const getUserArgs = require('./get-user-args').getUserArgs
const userArgs = getUserArgs()

const sum = userArgs.reduce(sumReducer, 0)

console.log(sum)

function sumReducer(prevVal, curVal) {
  const prevValAsNum = convertToNumber(prevVal)
  const curValAsNum = convertToNumber(curVal)

  return prevValAsNum + curValAsNum
}

function convertToNumber (val) {
  return Number(val)
}
