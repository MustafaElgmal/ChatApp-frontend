<<<<<<< HEAD

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStorageauth } from "../../constants.ts";

const initialState:{token:string,isLoggedIn:boolean} =localStorageauth()
=======
import { authActionType } from "./../../types";
import { createSlice } from "@reduxjs/toolkit";
const local = localStorage.getItem("user");
const initialState =
  local === null ? { token: "", isLoggedIn: false } : JSON.parse(local);
>>>>>>> origin
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handelLogin: (state, action:PayloadAction<{token:string}>) => {
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
