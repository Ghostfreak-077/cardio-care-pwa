import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
// import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
// import Signup from "./components/Signup/Signup";
// import Learning from './pages/Learning/Learning';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LearnNews from "./pages/Learning/LearnNews";
import LearnBlogs from "./pages/Learning/LearnBlogs";
import LearnVideos from "./pages/Learning/LearnVideos";
import About from "./pages/About/About";
import Context from "./context/Context";
import { initializeApp } from "firebase/app";
import axios from "axios";
// import { configDotenv } from "dotenv";

// import { Notifications } from 'react-push-notification';
<link
  href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
  rel="stylesheet"
></link>;
// index.js or App.js

function App() {
  const [logged, setLogged] = useState(false);
  // const [url, setUrl] = useState(process.env.REACT_APP_SERVER)
  const url = process.env.REACT_APP_SERVER;
  const strapi_api = process.env.REACT_APP_STRAPI_API
  const [token, setToken] = useState(null);

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
  };
  // Initialize Firebase
  initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  useEffect(() => {


    const user = localStorage.getItem("user");
    if (user != null) {
      setLogged(JSON.parse(user));
      console.log(JSON.parse(user));
    }

    const jwt = localStorage.getItem("jwt");
    if (!user || jwt) {
      setToken(jwt);
      console.log(jwt);
    } else {
      console.log("ure not logged into strapi");

      axios
        .post(
          url + "api/auth/local",
          {
            identifier: JSON.parse(user)["email"],
            password: JSON.parse(user)["uid"],
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "bearer " + strapi_api,
            },
          }
        )
        .then(function (response) {
          console.log("success", response.data.jwt);
          localStorage.setItem("jwt", response.data.jwt);
          setToken(response.data.jwt);
        })
        .catch(function (error) {
          console.log("user not found, u need to signup");
        });
    }
  }, []);

  return (
    <Context.Provider value={{ url, logged, setLogged, token, setToken }}>
      <div className="App">
        <div className="panel"></div>
        {/* <Notifications/> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/dashboard" element={<ApiTest />}/> */}
                <Route
                  path="/dashboard"
                  element={<Profile setLogged={setLogged} />}
                />
                {/* <Route path="/dashboard" element={<Signup />}/> */}
                {/* <Route path="/dashboard" element={<Profile />} /> */}
                <Route path="/LearnNews" element={<LearnNews />} />
                <Route path="/LearnBlogs" element={<LearnBlogs />} />
                <Route path="/LearnVideos" element={<LearnVideos />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
