import React, { useContext, useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import axios from "axios";
import Context from "../../context/Context";
import Login from "../../components/Login/Login";

const Profile = ({ setLogged }) => {
  const weight = 68;
  const height = 172;

  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [emergencyContact, setEmergencyContact] = useState("");
  const { logged, token, url, setToken } = useContext(Context);
  const [form, setForm] = useState(true);

  const [data, setData] = useState({});

  const handleLogout = () => {
    setLogged(false);
    setToken(null);
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    window.location = '/'
  };

  useEffect(() => {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       const { latitude, longitude } = position.coords;
    //       setLocation({ latitude, longitude });
    //     },
    //     (error) => console.error(error),
    //     { enableHighAccuracy: true }
    //   );
    //   // Fetch existing emergency contact
    //   const userId = 'user123'; // Replace with actual user ID logic
    //   axios.post('http://localhost:5000/get-emergency-contact', { userId })
    //     .then(response => {
    //       if (response.data.success) {
    //         setEmergencyContact(response.data.emergencyContact);
    //       }
    //     })
    //     .catch(error => console.error('Error fetching emergency contact:', error));
    //   axios.get()

    const jwt = localStorage.getItem("jwt");

    if (jwt) {axios
      .get(url + "api/users/me", {
        headers: {
          Authorization: "bearer " + jwt,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res?.data);
      })}
  }, []);

  // const handleEmergencyContactChange = (e) => {
  //   setEmergencyContact(e.target.value);
  // };

  const handleSave = () => {
    //   const userId = 'user123'; // Replace with actual user ID logic
    //   axios.post('http://localhost:5000/set-emergency-contact', { userId, emergencyContact })
    //     .then(response => {
    //       if (response.data.success) {
    //         alert('Emergency contact updated successfully!');
    //       } else {
    //         alert(`Failed to update emergency contact: ${response.data.message}`);
    //       }
    //     })
    //     .catch(error => console.error('Error updating emergency contact:', error));
  };

  return (
    <div className={styles.profile}>
      <h3 className={styles.heading}>User Dashboard</h3>
      <div className={styles.container}>
        {form ? (
          <>
            <div className={styles.user}>
              <img
                src={logged ? logged["photoURL"] : "images/user.webp"}
                alt=""
                className={styles.userimg}
              />
              <div className={styles.userdetail}>
                <div className={styles.hello}>
                  {logged ? logged["displayName"] : "Name"}
                </div>
                <div className={styles.UserName}>
                  {logged ? logged["email"] : "email"}
                </div>
                <div className={styles.UserAddress}>
                  <img
                    src="/images/location.png"
                    alt=""
                    className={styles.locationIcon}
                  />
                  <div className="me-auto">
                    {location.latitude
                      ? `${location.latitude}, ${location.longitude}`
                      : "Silchar"}
                  </div>
                </div>
              </div>
            </div>

            {token ? (
              <>
                <div className={styles.healthdata}>
                  <div className={styles.info}>
                    <img
                      src="/images/height.webp"
                      alt=""
                      className={styles.icon}
                    />
                    <p>{data?.height} cm</p>
                  </div>
                  <div className={styles.info}>
                    <img
                      src="/images/weight.webp"
                      alt=""
                      className={styles.icon}
                    />
                    <p>{data?.weight} kg</p>
                  </div>
                  <div className={styles.info}>
                    <img src="/images/BMI.png" alt="" className={styles.icon} />
                    <p>
                      {Math.round((data?.weight / (data?.height / 100.00) ** 2) * 100) / 100}
                    </p>
                  </div>
                </div>
                <form className={styles.ProfileDetails}>
                  <fieldset>
                    <legend>Emergency Credentials</legend>
                    <div className={styles.Details}>
                      <p>Email</p>
                      <div className={styles.p}>{data?.emer_email}</div>
                      <hr />
                    </div>
                    <div className={styles.Details}>
                      <p>Emergency Contact</p>
                      <div className={styles.p}>{data?.phone}</div>
                      {/* <input
                        type="text"
                        placeholder={data?.phone}
                        value={emergencyContact}
                        onChange={(e) => {
                          setEmergencyContact(e.target.value);
                        }}
                        className={styles.p}
                      />
                      <button
                        type="button"
                        onClick={handleSave}
                        className={styles.saveButton}
                      >
                        Save
                      </button> */}
                      <hr />
                    </div>
                  </fieldset>
                </form>
              </>
            ) : (
              <>
                <div className="mt-5">
                  You need to add details before using the full features
                </div>
                <span
                  onClick={() => {
                    setForm(false);
                  }}
                  className={`mb-5 mt-3 ${styles.profileButtons}`}
                >
                  <button>Add</button>
                </span>
              </>
            )}

            <div className={styles.profileButtons}>
              {/* <button className={styles.password}>Change Password</button> */}
              <button
                className={styles.logout}
                onClick={handleLogout}
              >
                {" "}
                Log out
              </button>
            </div>
          </>
        ) : (
          <Login setForm={setForm} />
        )}
      </div>
    </div>
  );
};

export default Profile;
