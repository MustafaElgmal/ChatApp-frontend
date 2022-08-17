import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat";
import SignUp from "./pages/SignUp";
import GroupChat from "./pages/GroupChat";
import Login from "./pages/SignIn";
import Protected from "./components/Protected";
import { useSelector } from "react-redux";
import { authStateType } from "./types";

function App() {
  const isLoggedIn = useSelector(
    (state: authStateType) => state.auth.isLoggedIn
  );
  return (
    <div className="App" style={{ background: "#F8F9FA" }}>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <GroupChat />
            </Protected>
          }
        />
        <Route path="/Signup" element={isLoggedIn ? <Navigate to="/" /> : <SignUp />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/Chat/:id"
          element={
            <Protected>
              <Chat />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
