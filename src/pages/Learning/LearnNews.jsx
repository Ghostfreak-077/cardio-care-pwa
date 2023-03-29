import React, { useState, useEffect } from "react";
import LearnButtons from '../../components/LearnButtons/LearnButtons';
import styles from "./LearnNews.module.scss";
import axios from "axios";

const LearnNews = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=cardiac%20diseases&sortBy=publishedAt&apiKey=7d78b61fa1dc40418bc50c57e467511a"
        );
        setNewsData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.learnnews}>
       <LearnButtons/>
       {newsData.length > 0 ? (
          newsData.map((article, index) => (
            <div key={index} className={styles.newsContainer}>
              <div className={styles.news}>{article.title}</div>
            </div>
          ))
        ) : (
          <div>Loading news...</div>
        )}
      <div className={styles.extension}></div>
    </div>
  );
};

export default LearnNews;
