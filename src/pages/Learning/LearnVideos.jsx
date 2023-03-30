import React from "react";
import LearnButtons from "../../components/LearnButtons/LearnButtons";
import styles from "./LearnVideos.module.scss";

const LearnVideos = () => {
  return (
    <div className={styles.learnvideos}>
      <LearnButtons />
      <div class="video-container">
        <div class={styles.iframewrap}>
          <iframe
            title="5 health tips"
            src="https://www.youtube.com/embed/cW-vmmHgMOM"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3 className={styles.content}>
            The recent spate deaths in India due to heart diseases has raised
            concerns.
          </h3>
        </div>

        <div className={styles.iframewrap}>
          <iframe
            title="5 health tips"
            src="https://www.youtube.com/embed/cW-vmmHgMOM"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <h3 className={styles.content}>
            The recent spate deaths in India due to heart diseases has raised
            concerns.
          </h3>
        </div>

        <div class={styles.iframewrap}>
          <iframe
            title="5 health tips"
            src="https://www.youtube.com/embed/cW-vmmHgMOM"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3 className={styles.content}>
            The recent spate deaths in India due to heart diseases has raised
            concerns.
          </h3>
        </div>

        <div class={styles.iframewrap}>
          <iframe
            title="5 health tips"
            src="https://www.youtube.com/embed/cW-vmmHgMOM"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3 className={styles.content}>
            The recent spate deaths in India due to heart diseases has raised
            concerns.
          </h3>
        </div>

        <div class={styles.iframewrap}>
          <iframe
            title="5 health tips"
            src="https://www.youtube.com/embed/cW-vmmHgMOM"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3 className={styles.content}>
            The recent spate deaths in India due to heart diseases has raised
            concerns.
          </h3>
        </div>
      </div>
      <div className={styles.extension}></div>
    </div>
  );
};
export default LearnVideos;
