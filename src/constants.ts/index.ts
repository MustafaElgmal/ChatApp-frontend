export const BASE_URL = "http://localhost:3500";
const local = localStorage.getItem("user");
export const localStorageauth = (): { token: string; isLoggedIn: boolean } =>
  local === null ? { token: "", isLoggedIn: false } : JSON.parse(local);
