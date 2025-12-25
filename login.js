function login(usuario, password) {
  const USUARIO_CORRECTO = "genaro";
  const PASSWORD_CORRECTA = "1234";

  if (usuario !== USUARIO_CORRECTO) {
    return false;
  }

  if (password !== PASSWORD_CORRECTA) {
    return false;
  }

  return true;
}

module.exports = login;

