import React from "react";
import LearnButtons from '../../components/LearnButtons/LearnButtons';
import styles from "./LearnVideos.module.scss";

const LearnVideos = () => {
  return (
    <div className={styles.learnvideos}>
        <LearnButtons/>
      <div class="video-container">
        <div class="iframewrap">
          <p className={styles.content}>
            The recent spate of celebrity deaths in India due to heart diseases
            has raised concerns. Some prominent faces from showbiz including
            actors Siddharth Shukla, Puneeth Rajkumar, Chiranjeevi Sarja and
            singer KK have all died due to heart-related ailments in the past
            year. All these celebs were known for their healthy lifestyle and
            yet died of heart-related ailments. With increasing hours in front
            of laptops and stress at work, here's how you can keep your heart
            healthy.
          </p>
          <iframe
            title="5 health tips"
            src="https://www.youtube.com/embed/cW-vmmHgMOM"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.iframewrap}>
          <p className={styles.content}>
            The recent spate of celebrity deaths in India due to heart diseases
            has raised concerns. Some prominent faces from showbiz including
            actors Siddharth Shukla, Puneeth Rajkumar, Chiranjeevi Sarja and
            singer KK have all died due to heart-related ailments in the past
            year. All these celebs were known for their healthy lifestyle and
            yet died of heart-related ailments. With increasing hours in front
            of laptops and stress at work, here's how you can keep your heart
            healthy.
          </p>
          <iframe
            title="5 health tips"
            src="https://www.youtube.com/embed/cW-vmmHgMOM"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className={styles.extension}>
      </div>
    </div>
  );
};
export default LearnVideos;
