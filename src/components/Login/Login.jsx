import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import styles from "./Login.module.scss";

const Login = ({setLogged}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className={styles.Logincontainer}>
      <form onSubmit={signIn}>
        <h2>Log In to your Account</h2>
        <input
          type="email"
          placeholder="Enter your username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={signIn}>Log In</button>
      </form>
    </div>
  );
};

export default Login;