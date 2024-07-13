import React, { useContext, useState } from "react";
import styles from "./Login.module.scss";
import Context from "../../context/Context";
import axios from "axios";

const Login = ({ setForm }) => {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [emer_email, setEmer_email] = useState("");
  const [emer_number, setEmer_number] = useState("");
  const { url, logged, setToken } = useContext(Context);

  const signIn = (e) => {
    e.preventDefault();
    axios
      .post(url + "api/auth/local/register", {
        email: logged["email"],
        username: logged["displayName"],
        password: logged["uid"],
        emer_email: emer_email,
        phone: emer_number,
        weight: weight,
        height: height,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("jwt", res.data.jwt);
        setToken(res.jwt);
        setForm(true);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={styles.Logincontainer}>
      <form onSubmit={signIn}>
        <h2>Enter your details</h2>
        <input
          type="number"
          placeholder="Enter your Height (in cm)"
          value={height}
          onChange={(e) => setheight(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Enter your weight (in kg)"
          value={weight}
          onChange={(e) => setweight(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Enter a emergency email"
          title="This email will be used for SOS"
          value={emer_email}
          onChange={(e) => setEmer_email(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Enter a emergency number"
          title="This phone number will be used for SOS"
          value={emer_number}
          onChange={(e) => setEmer_number(e.target.value)}
        ></input>
        <button type="submit" onClick={signIn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
