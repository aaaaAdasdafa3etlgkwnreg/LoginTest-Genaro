const login = require("./login");

test("login correcto", () => {
  expect(login("genaro", "1234")).toBe(true);
});

test("usuario incorrecto", () => {
  expect(login("hola", "1234")).toBe(false);
});

test("password incorrecta", () => {
  expect(login("chau", "0000")).toBe(false);
});

test("usuario y password incorrectos", () => {
  expect(login("hola2", "0000")).toBe(false);
});