import React, { useState, useEffect } from "react";
import axios from "axios";
import LearnButtons from "../../components/LearnButtons/LearnButtons";
import styles from "./LearnVideos.module.scss";
import Loader from "../../components/Loader/Loader"; // Import the Loader component

const LearnVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search", {
            params: {
              key: "AIzaSyD4EAqbs27ISCW4JPzlKgGg6wbEoRARCpM",
              q: "cardiac diseases",
              part: "snippet",
              maxResults: 20,
              type: "video"
            }
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Ensure loader is shown for at least 2 seconds
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className={styles.learnvideos}>
      <LearnButtons />
      <h1>Welcome to your daily Video Feed Section</h1>

      {loading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <div className={styles.videoContainer}>
          {videos.map((video, index) => (
            <div key={index} className={styles.iframewrap}>
              <iframe
                title={video.snippet.title}
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h3 className={styles.content}>
                {video.snippet.title}
              </h3>
            </div>
          ))}
        </div>
      )}
      <div className={styles.extension}></div>
    </div>
  );
};

export default LearnVideos;
