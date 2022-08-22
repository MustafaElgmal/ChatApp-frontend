
import {  MessageType } from "./../types";
import moment from "moment";

export const display = () => {
  console.log("This is file of All function!");
};

export const captilize = (name: string) => {
  let nameCap = name
    .split(" ")
    .map((ele) => ele[0].toLocaleUpperCase() + ele.slice(1))
    .join(" ");
  return nameCap;
};

export const getTime = (date: Date) => {
  return moment(date).format("LT");
};

export const getLastMessage = (messages: MessageType[]) => {
  const now = new Date(Date.now()).getTime();
  let then, diff=Number.MAX_VALUE,lastMessage:MessageType=messages[0]
  messages.forEach((message) => {
    then = new Date(message.createdAt as Date).getTime();
    if(Math.round(now - then)<diff){
      diff=Math.round(now - then)
      lastMessage=message
    }
  });
  return lastMessage
};

