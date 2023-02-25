const { sum } = require("./index.js");

test("sum 1 + 1 should be 2", () => {
  expect(sum(1, 1)).toBe(3);
});
