import React from "react";
import LearnButtons from '../../components/LearnButtons/LearnButtons';
import styles from "./LearnNews.module.scss";

const LearnNews = () => {
  return (
    <div className={styles.learnnews}>
       <LearnButtons/>
      <div className={styles.newsContainer}>
        <div className={styles.news}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.newsContainer}>
        <div className={styles.news}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.newsContainer}>
        <div className={styles.news}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.newsContainer}>
        <div className={styles.news}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.newsContainer}>
        <div className={styles.news}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.extension}></div>
    </div>
  );
};
export default LearnNews;
