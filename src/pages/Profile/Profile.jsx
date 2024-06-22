import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import axios from 'axios';

const Profile = ({ setLogged }) => {
  const weight = 68;
  const height = 172;

  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [emergencyContact, setEmergencyContact] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true }
    );

    // Fetch existing emergency contact
    const userId = 'user123'; // Replace with actual user ID logic
    axios.post('http://localhost:5000/get-emergency-contact', { userId })
      .then(response => {
        if (response.data.success) {
          setEmergencyContact(response.data.emergencyContact);
        }
      })
      .catch(error => console.error('Error fetching emergency contact:', error));
  }, []);

  const handleEmergencyContactChange = (e) => {
    setEmergencyContact(e.target.value);
  };

  const handleSave = () => {
    const userId = 'user123'; // Replace with actual user ID logic
    axios.post('http://localhost:5000/set-emergency-contact', { userId, emergencyContact })
      .then(response => {
        if (response.data.success) {
          alert('Emergency contact updated successfully!');
        } else {
          alert(`Failed to update emergency contact: ${response.data.message}`);
        }
      })
      .catch(error => console.error('Error updating emergency contact:', error));
  };

  return (
    <div className={styles.profile}>
       <h3 className={styles.heading}>User Dashboard</h3>
      <div className={styles.container}>
       
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
              <div>{location.latitude ? `${location.latitude}, ${location.longitude}` : 'Silchar'}</div>
            </div>
          </div>
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
            <p>{Math.round((weight / ((height / 100) ** 2)) * 100) / 100}</p>
          </div>
        </div>
        <form className={styles.ProfileDetails}>
          <fieldset>
            <legend>Emergency Credentials</legend>
            <div className={styles.Details}>
              <p>Email</p>
              <div className={styles.p}>parthaverse@gmail.com</div>
              <hr />
            </div>
            <div className={styles.Details}>
              <p>Emergency Contact</p>
              <input
                type="text"
                value={emergencyContact}
                onChange={handleEmergencyContactChange}
                className={styles.p}
              />
              <button type="button" onClick={handleSave} className={styles.saveButton}>
                Save
              </button>
              <hr />
            </div>
          </fieldset>
        </form>
        <div className={styles.profileButtons}>
          <button className={styles.password}>Change Password</button>
          <button className={styles.logout} onClick={() => setLogged(false)}> Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
