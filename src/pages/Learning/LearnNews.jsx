import React, { useState, useEffect } from "react";
import LearnButtons from '../../components/LearnButtons/LearnButtons';
import styles from "./LearnNews.module.scss";
import axios from "axios";
import Loader from '../../components/Loader/Loader'; // Import the Loader component
import News from './news.json'

const LearnNews = () => {
  const [newsData, setNewsData] = useState();
  const [loading, setLoading] = useState(true); // State to control the loader

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(
    //       // "https://newsapi.org/v2/everything?q=cardiac%20diseases&sortBy=publishedAt&apiKey=7d78b61fa1dc40418bc50c57e467511a",
    //       `https://api.thenewsapi.com/v1/news/all/categories=health?api_token=${process.env.REACT_APP_NEWS_API}&search=Heart|cardio|cardiac`
    //     );
    //     setNewsData(response.data.data);
    //     console.log(response.data.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchData();

    setNewsData(News.data);
    console.log(newsData);


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
          {newsData ? (

            // console.log(newsData)
            newsData?.map((article, index) =>
            {
              console.log(article)
              return (
                article.image_url ? (
                  <div key={index} className={styles.newsItem}>
                  <img className={styles.newsI} src={article.image_url} alt="" />
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
            )}
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
