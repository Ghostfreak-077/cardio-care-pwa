import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
// import Learning from './pages/Learning/Learning';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LearnNews from './pages/Learning/LearnNews';
import LearnBlogs from './pages/Learning/LearnBlogs';
import LearnVideos from './pages/Learning/LearnVideos';
import ApiTest from './components/Signup/ApiTest';
// import { Notifications } from 'react-push-notification';
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>

function App() {

  return (
    <div className="App">
    <div className="panel"></div>
    {/* <Notifications/> */}
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<ApiTest />}/>
        {/* <Route path="/dashboard" element={<Profile/>}/> */}
        <Route path="/LearnNews" element={<LearnNews/>}/>
        <Route path="/LearnBlogs" element={<LearnBlogs/>}/>
        <Route path="/LearnVideos" element={<LearnVideos/>}/>
      </Routes>


    </BrowserRouter>
    </div>
  );
}

export default App;
