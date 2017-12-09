const R = require('ramda')

const isUniq = input => R.uniq(input).length === input.length
const sort = line =>
  line
    .split('')
    .sort()
    .join(' ')
const lines = input => input.split('\n').map(line => line.split(' ').map(sort))
const countBy = (by, input) => input.reduce((acc, curr) => acc + by(curr), 0)
const uniqueLines = R.compose(R.curry(countBy)(isUniq), lines)

module.exports = input => uniqueLines(input)
