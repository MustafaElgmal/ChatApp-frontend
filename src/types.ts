import { Socket } from 'socket.io-client';
export interface AppProps {
  message?: MessageType;
  show?:boolean,
  onHide?:Function
  conversation?:ConversationType
  socket?:Socket
  
}

export interface MessageType {
  id: number;
  name: string;
  body: string;
  createdAt: Date;
  updatedAt:Date
  type: string;
  user:UserType,
  conversation:ConversationType
}


export interface createUserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  ImgUrl:string
}
export interface UserType extends createUserType{
  id:number,
  messages?:MessageType[]
  conversations?:ConversationType[]
}

export interface UserTypes extends createUserType {
  id: number;
  dateOfBirth: Date | null;
}

export interface authActionType {
  type: string;
  payload: {
    token: string;
  };
}

export interface authStateType {
  auth: {
    user: UserTypes;
    isLoggedIn: Boolean;
    token: string;
  };
}

export interface ConversationType{
  id:number,
  title:string,
  messages?:MessageType[],
  users:UserType[],
  createdAt:Date,
  updatedAt:Date
  ImgUrl:string,
  name:string
}
