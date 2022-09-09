import { createUserType } from "../types";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { handelLogin } from "../redux/features/authSlice";
import { BASE_URL } from "../constants.ts";
import { addConversation, addConversationFilter, setConversations, setConversationsFilter } from "../redux/features/conversationSlice";

export const createUser = async (user: createUserType, dispatch: Dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, user);
    dispatch(handelLogin({ token: res.data.token,expire:res.data.expire }));
    localStorage.setItem(
      "user",
      JSON.stringify({ token: res.data.token, isLoggedIn: true,expire:res.data.expire })
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
    dispatch(handelLogin({ token: res.data.token,expire:res.data.expire }));
    localStorage.setItem(
      "user",
      JSON.stringify({ token: res.data.token, isLoggedIn: true,expire:res.data.expire })
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
  token: string,
  dispatch:Dispatch
) => {
  try {
    const res = await axios.post(`${BASE_URL}/conversations`, conversation, {
      headers: { authorization: token },
    });
    dispatch(addConversation(res.data.conversation))
    dispatch(addConversationFilter(res.data.conversation))
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
  dispatch:Dispatch
) => {
  try {
    const res = await axios.get(`${BASE_URL}/conversations`, {
      headers: { authorization: token },
    });
    dispatch(setConversations(res.data.conversations))
    dispatch(setConversationsFilter(res.data.conversations))
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
