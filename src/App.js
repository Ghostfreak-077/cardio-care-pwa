import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Learning from './pages/Learning/Learning';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>

function App() {

  return (
    <div className="App">
    <div className="panel"></div>
    <BrowserRouter>
      {/* <Home/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/learning" element={<Learning/>}/>
        <Route path="/dashboard" element={<Profile/>}/>
      </Routes>


    </BrowserRouter>
    </div>
  );
}

export default App;
