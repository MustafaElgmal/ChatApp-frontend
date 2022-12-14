import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat";
import SignUp from "./pages/SignUp";
import GroupChat from "./pages/GroupChat";
import Login from "./pages/SignIn";
import Protected from "./components/Protected";
import io from "socket.io-client";
import { Socket } from "socket.io-client";
import { useAppSelector } from "./redux/app/hookes";
import { BASE_URL } from "./constants.ts";
import ErrorPage from "./pages/404Page";
function App() {
  const [socket,setSocket]=useState<Socket>()
  const isLoggedIn = useAppSelector(
    (state) => state.auth.isLoggedIn
  );
  useEffect(()=>{
    isLoggedIn?setSocket(io(BASE_URL)):setSocket(undefined)
  },[])
  return (
    <div className="App" style={{ background: "#F8F9FA" }}>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <GroupChat socket={socket} />
            </Protected>
          }
        />
        <Route
          path="/Signup"
          element={isLoggedIn ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/Chat/:id"
          element={
            <Protected>
              <Chat socket={socket} />
            </Protected>
          }
        />
        <Route
          path="*"
          element={<ErrorPage/>}
        />

      </Routes>
    </div>
  );
}

export default App;
