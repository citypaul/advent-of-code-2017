const R = require('ramda')

const isUniq = input => R.uniq(input).length === input.length
const lines = input => input.split('\n').map(line => line.split(' '))
const countUnique = input => {
  return lines(input).reduce((acc, curr) => {
    return acc + isUniq(curr)
  }, 0)
}

const uniqueLines = R.compose(isUniq, lines)

module.exports = input => countUnique(input)

//input => isUniq(input.split(' '))
