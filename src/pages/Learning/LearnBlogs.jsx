import React from "react";
import LearnButtons from '../../components/LearnButtons/LearnButtons';
import styles from "./LearnBlogs.module.scss";

const LearnBlogs = () => {
  return (
    <div className={styles.learnblogs}>
         <LearnButtons/>
      <div className={styles.blogContainer}>
        <div className={styles.blog}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.blogContainer}>
        <div className={styles.blog}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.blogContainer}>
        <div className={styles.blog}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.blogContainer}>
        <div className={styles.blog}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.blogContainer}>
        <div className={styles.blog}>
          People exposed to low doses of ionizing radiation have an extra, but
          modest, risk of developing heart disease during their lifetime,
          according to a new study published by an international consortium of
          researchers.
        </div>
      </div>
      <div className={styles.extension}>
      </div>
    </div>
  );
};
export default LearnBlogs;
