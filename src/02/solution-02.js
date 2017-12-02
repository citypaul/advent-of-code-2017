const rows = input => input.split(/\n/).map(row => row.split(/\t/).map(Number))
const divisible = (row, number) =>
  row.find(element => {
    return number % element === 0 && element !== number
  })

module.exports = input => {
  return rows(input).reduce((sum, row) => {
    return (
      sum +
      row.reduce((sum, number) => {
        return (sum += divisible(row, number) ? number / divisible(row, number) : 0)
      }, 0)
    )
  }, 0)
}
