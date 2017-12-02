module.exports = input => {
  return input
    .toString(10)
    .split('')
    .map(Number)
    .reduce((accumulator, current, index, original) => {
      const indexToCompare =
        index + original.length / 2 < original.length
          ? index + original.length / 2
          : (index + original.length / 2) % original.length

      if (current === original[indexToCompare]) {
        accumulator = accumulator + current
      }

      return accumulator
    }, 0)
}
