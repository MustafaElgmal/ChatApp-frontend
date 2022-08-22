import React from "react";
import SignIn from "../pages/SignIn";
import { useAppSelector } from "../utiles/hookes";

const Protected = ({ children }: any) => {
  const isLoggedIn = useAppSelector(
    (state) => state.auth.isLoggedIn
  );
  return <div>{isLoggedIn ? children : <SignIn />}</div>;
};

export default Protected;
