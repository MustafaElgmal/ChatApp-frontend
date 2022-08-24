

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStorageauth } from "../../constants.ts";

const initialState:{token:string,isLoggedIn:boolean,expire:number} =localStorageauth()
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handelLogin: (state, action:PayloadAction<{token:string,expire:number}>) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.expire=action.payload.expire
    },
    handelLogout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
      state.expire=0
    },
  },
});
export const { handelLogin, handelLogout } = authSlice.actions;
export default authSlice.reducer;
