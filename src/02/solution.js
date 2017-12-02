//'5 1 9 5 |7 5 3 |2 4 6 8'
const rows = input => input.split('\n').map(row => row.split(' ').map(Number))

module.exports = input => {
  return rows(input).reduce((accumulator, current, index, original) => {
    const difference = Math.max(...current) - Math.min(...current)
    return accumulator + difference
  }, 0)
}
