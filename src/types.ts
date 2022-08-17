export interface AppProps {
  message?: MessageType;
  show?:boolean,
  onHide?:Function
  conversation?:ConversationType
  
}

export interface MessageType {
  id: number;
  name: string;
  body: string;
  createdAt: Date;
  type: string;
  user:UserType
}


export interface createUserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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


}
