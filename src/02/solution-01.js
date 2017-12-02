const rows = input => input.split(/\n/).map(row => row.split(/\t/).map(Number))

module.exports = input =>
  rows(input).reduce((accumulator, current) => accumulator + Math.max(...current) - Math.min(...current), 0)
