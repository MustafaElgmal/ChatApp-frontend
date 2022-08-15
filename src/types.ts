export interface AppProps {
  message?: MessageType;
}

export interface MessageType {
  id: number;
  name: string;
  body: string;
  createdAt: Date;
  type: string;
}

export interface createUserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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
