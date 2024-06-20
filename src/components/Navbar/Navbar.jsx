import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FiHome } from "react-icons/fi";
import { IoAccessibilityOutline } from "react-icons/io5";
// import {AiOutlineLineChart} from 'react-icons/ai'
import { CgProfile, CgNotes } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;
  const [deviceId, setDeviceId] = useState();
  const [connected, setConnected] = useState('none');
  const ip = '172.168.49.20'

  return (
    <>
      {window.innerWidth < 768 ? <>{connected === 'none' ? <input type="text" className={styles.deviceId} value={deviceId} onChange={(e) => { setDeviceId(e.target.value) }} /> : ''}
        <button className={`${styles.connect} ${connected !== 'none' ? styles.connected : ''}`} onClick={() => { connected === 'none' ? setConnected(deviceId) : setConnected('none') }}>{connected === 'none' ? 'Connect' : 'Connected to ' + connected}</button></> : ''}

      <div className={styles.navbar}>
        {window.innerWidth > 600 ? <div className={styles.logo}>
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div> : ''}
        
        <ul>
          {window.innerWidth > 768 ? <li className={styles.device}>
            {connected === 'none' ? <input type="text" className={styles.deviceId} value={deviceId} onChange={(e) => { setDeviceId(e.target.value) }} /> : ''}
            <button className={`${styles.connect} ${connected !== 'none' ? styles.connected : ''}`} onClick={() => { connected === 'none' ? setConnected(deviceId) : setConnected('none') }}>{connected === 'none' ? 'Connect' : 'Connected to ' + connected}</button>
          </li> : ''}
          <li className={`vr mx-4 ${styles.vr}`} style={{ minHeight: '100%', height: '2rem' }}> </li>
          <li className={location === "/" ? styles.sel : ""}>
            <Link to="/">
              <FiHome title="Home" />
            </Link>
          </li>
          <li
            className={
              (location === "/LearnNews") | (location === "/LearnBlogs") | (location === "/LearnVideos")
                ? styles.sel
                : ""
            }
          >
            <Link to="/LearnNews">
              <CgNotes title="Learn" />
            </Link>
          </li>
          <li className={location === "/dashboard" ? styles.sel : ""}>
            <Link to="/dashboard">
              <CgProfile title="Dashboard" />
            </Link>
          </li>
          <li className={location === "/about" ? styles.sel : ""}>
            <Link to="/about">
              <IoAccessibilityOutline title="About" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
