import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Chat from './pages/Chat';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App" style={{background:'#F8F9FA'}}>
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/chat' element={<Chat />}/>
      </Routes>
    </div>
  );
}

export default App;
