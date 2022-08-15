import { createUserType } from "../types";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { handelLogin } from "../redux/features/authSlice";

const BaseUrl = "http://localhost:3500";

export const createUser = async (user: createUserType, dispatch: Dispatch) => {
  try {
    const res = await axios.post(`${BaseUrl}/users`, user);
    dispatch(handelLogin({ token: res.data.token }));
    localStorage.setItem(
      "user",
      JSON.stringify({ token: res.data.token, isLoggedIn: true })
    );
    return res;
  } catch (e: any) {
    if (e.response.status !== 500) {
      return alert(e.response.data.messages[0].message);
    }
    console.log(e);
  }
};

export const validateUser = async (
  user: { email: string; password: string },
  dispatch: Dispatch
) => {
  try {
    const res = await axios.post(`${BaseUrl}/users/signin`, user);
    dispatch(handelLogin({ token: res.data.token }));
    localStorage.setItem(
      "user",
      JSON.stringify({ token: res.data.token, isLoggedIn: true })
    );
    return res;
  } catch (e: any) {
    if (e.response.status !== 500) {
      return alert(e.response.data.messages[0].message);
    }
    console.log(e);
  }
};
