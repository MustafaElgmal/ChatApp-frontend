import { Dispatch } from '@reduxjs/toolkit';

import { ConversationType, MessageType } from "./../types";
import moment from "moment";
import { setConversationsFilter } from '../redux/features/conversationSlice';


export const captilize = (name: string) => {
  const nameCap = name
    .split(' ')
    .map((ele) =>ele!==''? ele[0].toLocaleUpperCase() + ele.slice(1):null)
    .join(' ');
  return nameCap;
};

export const getTime = (date: Date) => {
  return moment(date).format("LT");
};

export const getLastMessage = (messages: MessageType[]=[]) => {
  if(messages.length===0){
    return `"Hey there!"`
  }
  const now = new Date(Date.now()).getTime();
  let then,
    diff = Number.MAX_VALUE,
    lastMessage: MessageType = messages[0];
  messages.forEach((message) => {
    then = new Date(message.createdAt as Date).getTime();
    if (Math.round(now - then) < diff) {
      diff = Math.round(now - then);
      lastMessage = message;
    }
  });
  return lastMessage.body;
};

export  const searchFilter = (value: string,conversations:ConversationType[],dispatch:Dispatch) => {
  const conversationsFilter = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(value.toLowerCase())
  );
  dispatch(setConversationsFilter(conversationsFilter));
};
