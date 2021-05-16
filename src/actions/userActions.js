const login = (payload) => {
  return {
    type: "LOGIN",
    payload,
  };
};

const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export { login, logout };
