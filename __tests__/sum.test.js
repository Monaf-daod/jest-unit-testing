const Sum = require("../sum");

test("Testing the sum of no number", () => {
  expect(Sum()).toBe(0);
});

test("Testing the sum of one number", () => {
  expect(Sum(1)).toBe(1);
});

test("Testing the sum of two numbers", () => {
  expect(Sum(1, 2)).toBe(3);
});

test("Testing the sum of three numbers", () => {
  expect(Sum(1, 2, 3)).toBe(6);
});
