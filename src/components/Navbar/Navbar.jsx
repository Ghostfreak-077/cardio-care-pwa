import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { FiHome } from "react-icons/fi";
import { IoAccessibilityOutline } from "react-icons/io5";
// import {AiOutlineLineChart} from 'react-icons/ai'
import { CgProfile, CgNotes } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo,
} from "firebase/auth";
import { Router } from "react-router-dom";
import Context from "../../context/Context";

const Navbar = () => {
  const location = useLocation().pathname;
  const [deviceId, setDeviceId] = useState();
  const [connected, setConnected] = useState("none");
  const ip = "172.168.49.20";
  const provider = new GoogleAuthProvider();
  const { logged } = useContext(Context);

  const signIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(JSON.stringify(user));
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      {window.innerWidth < 768 ? (
        <>
          {connected === "none" ? (
            <input
              type="text"
              className={styles.deviceId}
              value={deviceId}
              onChange={(e) => {
                setDeviceId(e.target.value);
              }}
            />
          ) : (
            ""
          )}
          <button
            className={`${styles.connect} ${
              connected !== "none" ? styles.connected : ""
            }`}
            onClick={() => {
              connected === "none"
                ? setConnected(deviceId)
                : setConnected("none");
            }}
          >
            {connected === "none" ? "Connect" : "Connected to " + connected}
          </button>
        </>
      ) : (
        ""
      )}

      <div className={styles.navbar}>
        {window.innerWidth > 600 ? (
          <div className={styles.logo}>
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
        ) : (
          ""
        )}

        <ul>
          {window.innerWidth > 768 ? (
            <li className={styles.device}>
              {connected === "none" ? (
                <input
                  type="text"
                  className={styles.deviceId}
                  value={deviceId}
                  onChange={(e) => {
                    setDeviceId(e.target.value);
                  }}
                />
              ) : (
                ""
              )}
              <button
                className={`${styles.connect} ${
                  connected !== "none" ? styles.connected : ""
                }`}
                onClick={() => {
                  connected === "none"
                    ? setConnected(deviceId)
                    : setConnected("none");
                }}
              >
                {connected === "none" ? "Connect" : "Connected to " + connected}
              </button>
            </li>
          ) : (
            ""
          )}
          <li
            className={`vr mx-4 ${styles.vr}`}
            style={{ minHeight: "100%", height: "2rem" }}
          >
            {" "}
          </li>
          <li className={location === "/" ? styles.sel : ""}>
            <Link to="/">
              <FiHome title="Home" />
            </Link>
          </li>
          <li
            className={
              (location === "/LearnNews") |
              (location === "/LearnBlogs") |
              (location === "/LearnVideos")
                ? styles.sel
                : ""
            }
          >
            <Link to="/LearnNews">
              <CgNotes title="Learn" />
            </Link>
          </li>
          <li className={location === "/about" ? styles.sel : ""}>
            <Link to="/about">
              <IoAccessibilityOutline title="About" />
            </Link>
          </li>
          <li className={`${location === "/dashboard" ? `${styles.sel}` :''} ${styles.profile_img} `}>
            {logged ? (
              <Link to="/dashboard">
                <img src={logged['photoURL']}  title="Dashboard"/>
              </Link>
            ) : (
                <img src="/images/profile_silhoutte.png" title="Login" onClick={signIn} />
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
