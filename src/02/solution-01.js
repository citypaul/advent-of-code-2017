const rows = input => input.split(/\n/).map(row => row.split(/\t/).map(Number))

module.exports = input => {
  return rows(input).reduce((accumulator, current) => {
    const difference = Math.max(...current) - Math.min(...current)
    return accumulator + difference
  }, 0)
}
