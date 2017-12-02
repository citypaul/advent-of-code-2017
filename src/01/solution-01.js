module.exports = input =>
  input
    .toString(10)
    .split('')
    .map(Number)
    .reduce((accumulator, current, index, original) => {
      const prev = original[index - 1]

      if (index === 0) {
        if (current === original[original.length - 1]) {
          accumulator += current
        }
      }

      if (prev === current) {
        accumulator += current
      }

      return accumulator
    }, 0)
