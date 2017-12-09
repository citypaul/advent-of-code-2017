const R = require('ramda')

const isUniq = input => R.uniq(input).length === input.length
const lines = input => input.split('\n').map(line => line.split(' '))
const countBy = (by, input) => input.reduce((acc, curr) => acc + by(curr), 0)
const uniqueLines = R.compose(R.curry(countBy)(isUniq), lines)

module.exports = input => uniqueLines(input)
