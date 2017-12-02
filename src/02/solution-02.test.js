const solution = require('./solution-02')
const fs = require('fs')
const path = require('path')

const getTextFile = filename => fs.readFileSync(`${path.join(__dirname)}/${filename}`, 'utf-8')

test('works', () => {
  expect(solution(getTextFile('solution-02-sample.txt'))).toBe(9)
})

test('solution', () => {
  expect(solution(getTextFile('input.txt'))).toBe(258)
})
