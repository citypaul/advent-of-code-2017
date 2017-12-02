const rows = input => input.split(/\n/).map(row => row.split(/\t/).map(Number))
const divisible = (row, number) => row.find(element => number % element === 0 && element !== number)
const sumDivisibles = row => (acc, number) => {
  acc += divisible(row, number) ? number / divisible(row, number) : 0
  return acc
}

module.exports = input => rows(input).reduce((sum, row) => sum + row.reduce(sumDivisibles(row), 0), 0)
