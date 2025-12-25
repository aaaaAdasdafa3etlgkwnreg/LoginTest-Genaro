const { sum, multiplicacion, division } = require("./operaciones");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 4 * 5 to equal 20", () => {
  const result = multiplicacion(4, 5);
  expect(result).toBe(20);
});

test("adds 4 / 2 to equal 2", () => {
  const result = division(4, 2);
  expect(result).toBe(2);
});
