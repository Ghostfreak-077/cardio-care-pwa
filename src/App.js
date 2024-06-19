import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
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

  const [logged, setLogged] = useState(false)

  return (
    <div className="App">
      <div className="panel"></div>
      {/* <Notifications/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {!logged ? <>
            <Route path="/" element={<Home />} />
            {/* <Route path="/dashboard" element={<ApiTest />}/> */}
            <Route path="/dashboard" element={<Profile setLogged={setLogged} />} />
            {/* <Route path="/dashboard" element={<Signup />}/> */}
            {/* <Route path="/dashboard" element={<Profile />} /> */}
            <Route path="/LearnNews" element={<LearnNews />} />
            <Route path="/LearnBlogs" element={<LearnBlogs />} />
            <Route path="/LearnVideos" element={<LearnVideos />} />
          </> :
            <Route path="/*" element={<Login setLogged={setLogged} />} />
          }
        </Routes>
        <Footer/>


      </BrowserRouter>
      
    </div>
  );
}

export default App;
