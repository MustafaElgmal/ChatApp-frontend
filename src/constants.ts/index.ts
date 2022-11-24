export const BASE_URL = "https://caht-app.onrender.com";
const local = localStorage.getItem("user");
export const localStorageauth = (): {
  token: string;
  isLoggedIn: boolean;
  expire: number;
} =>
  local === null
    ? { token: "", isLoggedIn: false, expire: 0 }
    : JSON.parse(local);
