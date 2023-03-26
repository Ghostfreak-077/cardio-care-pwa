import React from "react";
import styles from "./Profile.module.scss";
import ProfileContact from "./ProfileContact";
/* <link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
  rel="stylesheet"
></link>; */

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h3 className={styles.heading}>User Dashboard</h3>
      <div className={styles.user}>
        <img src="/images/user.webp" alt="" className={styles.userimg} />
        <div className={styles.userdetail}>
          <div className={styles.hello}>Hello!</div>
          <div className={styles.UserName}>UserName</div>
          <div className={styles.UserAddress}>
            <img
              src="/images/location.png"
              alt=""
              className={styles.locationIcon}
            />
            <div>UserAddress</div>
          </div>
        </div>
        <button className={styles.editimg}></button>
      </div>
      <div className={styles.healthdata}>
        <div className={styles.iconcolumn}>
          <div className={styles.info}>
            <img src="/images/height.webp" alt="" className={styles.icon} />
            <p>172 cm</p>
          </div>
          <div className={styles.info}>
            <img src="/images/weight.webp" alt="" className={styles.icon} />
            <p>58 kg</p>
          </div>
        </div>
        <div className={styles.iconcolumn}>
          <div className={styles.info}>
            <img src="/images/BMI.png" alt="" className={styles.icon} />
            <p>18.5</p>
          </div>
          <div className={styles.info}>
            <img src="/images/water.png" alt="" className={styles.icon} />
            <p>7.6 litres</p>
          </div>
        </div>
      </div>
      <ProfileContact />
      <div className={styles.profileButtons}>
        <button className={styles.password}>Change Password</button>
        <button className={styles.logout}> Log out</button>
      </div>
    </div>
  );
};

export default Profile;
