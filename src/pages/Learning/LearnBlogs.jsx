import React from "react";
import LearnButtons from '../../components/LearnButtons/LearnButtons';
import styles from "./LearnBlogs.module.scss";

const LearnBlogs = () => {
  return (
    <div className={styles.learnblogs}>
         <LearnButtons/>
      <div className={styles.blogContainer}>
        <img classname={styles.blogImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-kKTxeKA5dHsT6hF_GLu8jvXENxfqySYKQuI83Z5bXfMu58PW7nETTheDMmcTDXaeoo&usqp=CAU" alt="#" />
        <div className={styles.blog}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.blogContainer}>
      <img classname={styles.blogImg} src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/03/male-next-to-car-looking-at-phone-732-549-feature-thumb-732x549.jpg?w=420" alt="#" />

        <div className={styles.blog}>
        A new drug might potentially treat obesity without surgery and without the side effects of current medications, according to new research presented at the spring meeting of the American Chemical Society.
        </div>
      </div>
      <div className={styles.blogContainer}>
      <img classname={styles.blogImg} src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/03/female-eyes-closed-abstract-732-549-feature-thumb-732x549.jpg?w=420" alt="#" />

        <div className={styles.blog}>
        New research shows a sound biological reason for this phenomenon — and it all has to do with the body’s internal clock, the circadian system.
        </div>
      </div>
      <div className={styles.blogContainer}>
      <img classname={styles.blogImg} src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/03/cbd-marijuana-732x549-thumbnail-1-732x549.jpg?w=420" alt="#" />

        <div className={styles.blog}>
        Asprin is one of the oldest pain-relieving drugs currently in use, and researchers continue to learn more about how it works.
        </div>
      </div>
      <div className={styles.blogContainer}>
      <img classname={styles.blogImg} src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/03/cocklebur-732x549-thumbnail-732x549.jpg?w=420" alt="#" />

        <div className={styles.blog}>
        Research presented on Tuesday reports that the fruit of the cocklebur plant – considered by many to be a weed – might have antioxidant and anti-inflammatory components that could be used to protect skin.
        </div>
      </div>
      <div className={styles.extension}>
      </div>
    </div>
  );
};
export default LearnBlogs;
