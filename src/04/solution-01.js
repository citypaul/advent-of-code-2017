const R = require('ramda')

const isUniq = input => R.uniq(input).length === input.length
const lines = input => input.split('\n').map(line => line.split(' '))
const countUnique = input => input.reduce((acc, curr) => acc + isUniq(curr), 0)
const uniqueLines = R.compose(countUnique, lines)

module.exports = input => uniqueLines(input)
