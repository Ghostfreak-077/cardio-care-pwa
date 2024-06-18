import React from "react";
import styles from "./LearnButtons.module.scss";
import {Link, useLocation} from 'react-router-dom'

const LearnButtons = () => {
    const location = useLocation().pathname 
  return (
    
    <div className={styles.learn}>
      <div className={styles.learnButtons}>
      

        <button className={location === '/LearnNews'?styles.active:''}><Link to="/LearnNews" className={styles.link}>News</Link></button> 
        <button className={location === '/LearnBlogs'?styles.active:''}><Link to="/LearnBlogs" className={styles.link}>Blogs</Link></button>
        <button className={location === '/LearnVideos'?styles.active:''}><Link to="/LearnVideos" className={styles.link}>Videos</Link></button>
      </div>
    </div>
  );
};
export default LearnButtons;
