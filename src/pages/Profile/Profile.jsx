import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import ProfileContact from "./ProfileContact";
const Profile = ({setLogged}) => {

  const weight = 68;
  const height = 172;

  const [location, setLocation] = useState(navigator.geolocation.getCurrentPosition((e)=>{console.log(e.coords)}));

  useEffect(()=>{
    const location_temp = navigator.geolocation.getCurrentPosition((e)=>{console.log(e.coords)})
    // setLocation(location_temp)
    console.log(location_temp);
  },[location])

  return (
    <div className={styles.profile}>
      <h3 className={styles.heading}>User Dashboard</h3>
      <div className={styles.user}>
        <img src="/images/user.webp" alt="" className={styles.userimg} />
        <div className={styles.userdetail}>
          <div className={styles.hello}>Aryadeep</div>
          <div className={styles.UserName}>Prag03</div>
          <div className={styles.UserAddress}>
            <img
              src="/images/location.png"
              alt=""
              className={styles.locationIcon}
            />
            <div>{location?location.latitude:'Silchar'}</div>
          </div>
        </div>
        <button className={styles.editimg}></button>
      </div>
      <div className={styles.healthdata}>
          <div className={styles.info}>
            <img src="/images/height.webp" alt="" className={styles.icon} />
            <p>{height} cm</p>
          </div>
          <div className={styles.info}>
            <img src="/images/weight.webp" alt="" className={styles.icon} />
            <p>{weight} kg</p>
          </div>
          <div className={styles.info}>
            <img src="/images/BMI.png" alt="" className={styles.icon} />
            <p>{Math.round(weight/((height/100)^2)*100)/100}</p>
          </div>
      </div>
      <ProfileContact />
      <div className={styles.profileButtons}>
        <button className={styles.password}>Change Password</button>
        <button className={styles.logout} onClick={()=>setLogged(false)}> Log out</button>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Profile;
