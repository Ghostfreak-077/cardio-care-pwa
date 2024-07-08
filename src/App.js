import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
// import Learning from './pages/Learning/Learning';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LearnNews from "./pages/Learning/LearnNews";
import LearnBlogs from "./pages/Learning/LearnBlogs";
import LearnVideos from "./pages/Learning/LearnVideos";
import About from "./pages/About/About";
import ApiTest from "./components/Signup/ApiTest";
import Context from "./context/Context";
import { initializeApp } from "firebase/app";
import axios from "axios";
// import { Notifications } from 'react-push-notification';
<link
  href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
  rel="stylesheet"
></link>;
// index.js or App.js

function App() {
  const [logged, setLogged] = useState(false);
  const url = "http://localhost:1337/";
  const strapi_api =
    "2391e0ae9abea91adc185c059f65e74be33e7198fcb99862a81aeb1867f7407e89832737c9d52006c7eb2d8ce5e8d9d78adcfdb6a4ff5e11161a56b7fb3448421cb6af48ab8ac41b9d22424409518bcc1605621c47d2b3b1eadf72423ccfc188fb7e8c71d45390af93143012ca006c5e1dd0f095e09bf432b5ee5c38a21821c6";
  const [token, setToken] = useState(null);

  const firebaseConfig = {
    apiKey: "AIzaSyBwnjIYOH5q-cboAl0LAkGO-hotu3tUOVs",
    authDomain: "cardiocare-2022.firebaseapp.com",
    projectId: "cardiocare-2022",
    storageBucket: "cardiocare-2022.appspot.com",
    messagingSenderId: "916301609182",
    appId: "1:916301609182:web:580b6552a72d8761ba6a4f",
    measurementId: "G-N87WT8ELHJ",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
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
              Authorization: "bearer " + strapi_api,
            },
          }
        )
        .then(function (response) {
          console.log("success", response.jwt);
          setToken(response.jwt);
        })
        .catch(function (error) {
          console.log("user not found, u need to signup");
        });
    }
  }, []);

  return (
    <Context.Provider value={{ url, logged, setLogged, token }}>
      <div className="App">
        <div className="panel"></div>
        {/* <Notifications/> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            {logged ? (
              <>
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
              </>
            ) : (
              <Route path="/*" element={<Login setLogged={setLogged} />} />
            )}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
