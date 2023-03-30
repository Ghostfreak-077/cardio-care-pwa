import React from "react";
import styles from "./ProfileContact.module.scss";

const ProfileContact = () => {
  return (
    <form className={styles.ProfileDetails}>
      <fieldset>
        <legend>Emergency Credentials</legend>
          <div className={styles.Details}>
            <p>Email</p>
            <div className={styles.p}>parthaverse@gmail.com</div>
            <hr></hr>
          </div>
          <div className={styles.Details}>
            <p>Emergency Contact</p>
            <div className={styles.p}>9707577970</div>
            <hr></hr>
          </div>
          {/* <div className={styles.Details}>
            <p>Emergency Contact</p>
            <div className={styles.p}>9876543210</div>
            <hr></hr>
          </div> */}
      </fieldset>
    </form>
  );
};
export default ProfileContact;
