// expect(solution(1122)).toBe(3)
// expect(solution(1234)).toBe(0)
// expect(solution(1111)).toBe(4)
// expect(solution(91212129)).toBe(9)

module.exports = input => {
  return input
    .toString(10)
    .split('')
    .map(Number)
    .reduce((accumulator, current, index, original) => {
      const prev = original[index - 1];

      if (index === 0) {
        if (current === original[original.length - 1]) {
          accumulator = accumulator + current;
        }
      }

      if (prev === current) {
        accumulator = accumulator + current;
      }

      return accumulator;
    }, 0);
};
