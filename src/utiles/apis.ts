import { createUserType } from "../types";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { handelLogin } from "../redux/features/authSlice";
import { BASE_URL } from "../constants.ts";

export const createUser = async (user: createUserType, dispatch: Dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, user);
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
    const res = await axios.post(`${BASE_URL}/users/signin`, user);
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
export const getUsers=async(setUsers:Function,token:string)=>{
  try{
    const res=await axios.get(`${BASE_URL}/users`,{headers:{'authorization':token}})
    setUsers(res.data.users)
  }catch(e){
    console.log(e)
  }
}

export const CreateConversation = async (
  conversation: { title: string; userIds: number[] },
  token: string
) => {
  try {
    const res = await axios.post(`${BASE_URL}/conversations`, conversation, {
      headers: { authorization: token },
    });
    return res;
  } catch (e: any) {
    if (e.response.status !== 500) {
      return alert(e.response.data.messages[0].message);
    }
    console.log(e);
  }
};


export const getConversations = async (
  token: string,
  setConversation: Function,
  setConversationFilter: Function
) => {
  try {
    const res = await axios.get(`${BASE_URL}/conversations`, {
      headers: { authorization: token },
    });
    setConversation(res.data.conversations);
    setConversationFilter(res.data.conversations);
  } catch (e) {
    console.log(e);
  }
};

export const createMessage = async (
  token: string,
  id: number,
  message: { body: string }
) => {
  try {
    const res = await axios.post(`${BASE_URL}/messages/${id}`, message, {
      headers: { authorization: token },
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const getMessagesByConversationId = async (
  token: string,
  id: number,
  setMassage: Function
) => {
  try {
    const res = await axios.get(`${BASE_URL}/messages/${id}`, {
      headers: { authorization: token },
    });
    setMassage(res.data.messages);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
