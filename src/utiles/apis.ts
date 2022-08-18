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

export const getUsers=async(setUsers:Function,token:string)=>{
  try{
    const res=await axios.get(`${BaseUrl}/users`,{headers:{'authorization':token}})
    setUsers(res.data.users)
  }catch(e){
    console.log(e)

  }
}

export const CreateConversation=async(conversation:{title:string,userIds:number[]},token:string)=>{
  try{
    const res=await axios.post(`${BaseUrl}/conversations`,conversation,{headers:{'authorization':token}})
    console.log(res)
  }catch(e){
    console.log(e)
  }

}

export const getConversations=async(token:string,setConversation:Function)=>{
  try{
    const res=await axios.get(`${BaseUrl}/conversations`,{headers:{'authorization':token}})
    setConversation(res.data.conversations)
    console.log(res)
  }catch(e){
    console.log(e)
  }
}

export const createMessage=async(token:string,id:number,message:{body:string})=>{
  try{
    const res=await axios.post(`${BaseUrl}/messages/${id}`,message,{headers:{'authorization':token}})
    return res
  }catch(e){
    console.log(e)
  }

}

export const getMessagesByConversationId=async(token:string,id:number,setMassage:Function)=>{
  try{
    const res=await axios.get(`${BaseUrl}/messages/${id}`,{headers:{'authorization':token}})
    setMassage(res.data.messages)
    console.log(res)

  }catch(e){
    console.log(e)
  }

}