const esPrimo = require("./primos");

test("2 es primo", () => {
  expect(esPrimo(2)).toBe(true);
});

test("3 es primo", () => {
  expect(esPrimo(3)).toBe(true);
});

test("7  es primo", () => {
  expect(esPrimo(7)).toBe(true);
});
test("4 no es primo", () => {
  expect(esPrimo(4)).toBe(false); 
});

