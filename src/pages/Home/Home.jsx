import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import DataAnalysis from '../../components/DataAnalysis/DataAnalysis';
import DataAnalysis2 from '../../components/DataAnalysis/DataAnalysis2';
import Slider from '../../components/Slider/Slider';
import SelfSlider from '../../components/SelfSlider/SelfSlider';
import Map from '../../components/map/map';
import styles from './Home.module.scss';
import axios from 'axios';
import SOSButton from '../../components/SOSButton/SOSButton';

const Home = () => {
  const [emergencyContact, setEmergencyContact] = useState(null);
  const userId = 'user123'; // Replace with actual user ID logic

  useEffect(() => {
    const fetchEmergencyContact = async () => {
      try {
        const response = await axios.post('http://localhost:5000/get-emergency-contact', { userId });
        if (response.data.success) {
          setEmergencyContact(response.data.emergencyContact);
        }
      } catch (error) {
        console.error('Error fetching emergency contact:', error);
      }
    };

    fetchEmergencyContact();
  }, [userId]);

  const sendSOS = async () => {
    try {
      const response = await fetch('http://localhost:5000/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
      if (data.success) {
        alert('SOS message sent successfully!');
      } else {
        alert(`Failed to send SOS message: ${data.message}`);
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <div className={styles.home}>
      <Hero />
      <SOSButton userId={userId} sendSOS={sendSOS} />
      <div className={`${styles.nonHero} py-5`}>
        <h1 className='mb-5'>Device Stats</h1>
        <div className={`${styles.charts} container`}>
          <div className={styles.pulse}>
            <h3>Pulse Rate</h3>
            <DataAnalysis />
          </div>
          <div className={`${styles.oxy}`}>
            <h3>Oxygen Level</h3>
            <DataAnalysis2 />
          </div>
        </div>
        <SelfSlider />
        <Slider />
        <Map />
      </div>
    </div>
  );
};

export default Home;
