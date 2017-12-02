const rows = input => input.split(/\n/).map(row => row.split(/\t/).map(Number))
/*
5	9	2	8 (4)
9	4	7	3 (3)
3	8	6	5 (2) 
4+ 3 + 2 = 9

They would like you to find those numbers on each line, divide them, and add up each line's result.
*/
module.exports = input => {
  const result = rows(input).reduce((acc, row, index) => {
    const test = row.reduce((acc, number, ind, arr) => {
      const found = arr.find(element => {
        return number % element === 0 && element !== number
      })
      return (acc += found ? number / found : 0)
    }, 0)

    return acc + test
  }, 0)

  return result
}
