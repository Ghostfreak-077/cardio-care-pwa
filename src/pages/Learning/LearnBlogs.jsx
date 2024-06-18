// 

import React, { useState, useEffect } from "react";
import LearnButtons from '../../components/LearnButtons/LearnButtons';
import styles from "./LearnBlogs.module.scss";
import axios from "axios";

const LearnBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://your-blog-api-url.com/blogs" // Replace with your actual blog API URL
        );
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.learnblogs}>
      <LearnButtons />
      <h1>Welcome to your Daily Blogs Section</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        blogs.map((blog, index) => (
          <div key={index} className={styles.blogContainer}>
            <img className={styles.blogImg} src={blog.image} alt="#" />
            <div className={styles.blog}>{blog.content}</div>
          </div>
        ))
      )}
      <div className={styles.extension}></div>
    </div>
  );
};

export default LearnBlogs;
