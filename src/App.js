import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
    <div className="panel"></div>
    <BrowserRouter>
      {/* <Home/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
