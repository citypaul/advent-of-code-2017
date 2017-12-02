const solution = require('./solution')
const fs = require('fs')
const getTextFile = filename => fs.readFileSync(`${path.join(__dirname)}/${filename}`, 'utf-8')
const path = require('path')

test('works', () => {
  expect(solution(getTextFile('sample-input.txt'))).toBe(18)
})
