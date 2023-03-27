import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LearnNews from './pages/Learning/LearnNews';
import LearnBlogs from './pages/Learning/LearnBlogs';
import LearnVideos from './pages/Learning/LearnVideos';

function App() {

  return (
    <div className="App">
    <div className="panel"></div>
    <BrowserRouter>
      {/* <Home/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Profile/>}/>
        <Route path="/LearnNews" element={<LearnNews/>}/>
        <Route path="/LearnBlogs" element={<LearnBlogs/>}/>
        <Route path="/LearnVideos" element={<LearnVideos/>}/>
      </Routes>


    </BrowserRouter>
    </div>
  );
}

export default App;
