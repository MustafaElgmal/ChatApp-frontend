import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Chat from './pages/Chat';
import SignUp from './pages/SignUp';
import  GroupChat from "./pages/GroupChat";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App" style={{background:'#F8F9FA'}}>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/Conversations" element={<GroupChat />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/chat' element={<Chat />}/>
      </Routes>
    </div>
  );
}

export default App;
