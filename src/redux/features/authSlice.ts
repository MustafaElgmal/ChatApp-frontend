
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStorageauth } from "../../constants.ts";

const initialState:{token:string,isLoggedIn:boolean} =localStorageauth()
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handelLogin: (state, action:PayloadAction<{token:string}>) => {
      state.isLoggedIn = true;
      state.token =action.payload.token;
    },
    handelLogout: (state) => {
      state.isLoggedIn = false;
      state.token = "";

    },
  },
});
export const { handelLogin, handelLogout } = authSlice.actions;
export default authSlice.reducer;
