const sum = require('./main');
// No exemplo original era ./sum, ou seja a função soma estava num arquivo separado sum.js não no main.js

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

