const Sum = require("../sum");

describe("Testing Block Num 1 : No number", () => {
  test("Testing the sum of no number", () => {
    expect(Sum()).toBe(0);
  });
});

describe("Texting Block Num 2 : Only one number", () => {
  test("Testing the sum of one number", () => {
    expect(Sum(1)).toBe(1);
  });
});

describe("Testing Block Num 3 : More than one number", () => {
  test("Testing the sum of two numbers", () => {
    expect(Sum(100, 150)).toBe(250);
  });

  test("Testing the sum of three numbers", () => {
    expect(Sum(100, 200, 300)).toBe(600);
  });
});
