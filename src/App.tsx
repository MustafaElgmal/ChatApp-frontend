import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import  GroupChat from "./pages/GroupChat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Conversations" element={<GroupChat />} />
      </Routes>
    </div>
  );
}

export default App;
