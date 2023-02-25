const { sum, div } = require("./index.js");

test("sum 1 + 1 should be 2", () => {
  expect(sum(1, 1)).toBe(2);
});

test("div 4 / 2 should be 2", () => {
  expect(div(4, 2)).toBe(2);
});
