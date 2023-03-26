import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { Notifications } from 'react-push-notification';

function App() {

  return (
    <div className="App">
    <div className="panel"></div>
    <Notifications/>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
