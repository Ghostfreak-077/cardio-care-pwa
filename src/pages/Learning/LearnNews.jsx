import React, { useState, useEffect } from "react";
import LearnButtons from '../../components/LearnButtons/LearnButtons';
import styles from "./LearnNews.module.scss";
import axios from "axios";
import Loader from '../../components/Loader/Loader'; // Import the Loader component

const LearnNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true); // State to control the loader

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

    // Ensure the loader is visible for at least 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.learnnews}>
      <LearnButtons />
      <h1>Welcome to your daily Cardio News Section</h1>

      {loading ? (
        <div className={styles.loaderContainer}>
          <Loader /> 
        </div>
      ) : (
        <div className={styles.newsContainer}>
          {newsData.length > 0 ? (
            newsData.map((article, index) =>
              article.urlToImage ? (
                <div key={index} className={styles.newsItem}>
                  <img className={styles.newsI} src={article.urlToImage} alt="" />
                  <div className={styles.newsT}>{article.title}</div>
                  <div className={styles.newsD}>{article.description}</div>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.readMore}
                  >
                    Read More
                  </a>
                </div>
              ) : null
            )
          ) : (
            <div>No news available.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default LearnNews;
