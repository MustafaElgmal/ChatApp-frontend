import React from "react";
import { useSelector } from "react-redux";
import SignIn from "../pages/SignIn";
import { authStateType } from "../types";

const Protected = ({ children }: any) => {
  const isLoggedIn = useSelector(
    (state: authStateType) => state.auth.isLoggedIn
  );
  return <div>{isLoggedIn ? children : <SignIn />}</div>;
};

export default Protected;
