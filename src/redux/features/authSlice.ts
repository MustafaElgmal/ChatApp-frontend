import { authActionType } from "./../../types";
import { createSlice } from "@reduxjs/toolkit";
const local = localStorage.getItem("user");
const initialState =
  local === null ? { token: "", isLoggedIn: false } : JSON.parse(local);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handelLogin: (state, action: authActionType) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    handelLogout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});
export const { handelLogin, handelLogout } = authSlice.actions;
export default authSlice.reducer;
