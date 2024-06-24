import React, { useState } from 'react';
import axios from 'axios';
import Notification from '../Notification/Notification';
import styles from './SOSButton.module.scss';

const SosButton = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleSosClick = async () => {
    setLoading(true);
    setNotification(null);

    try {
      const response = await axios.post('http://localhost:5000/api/sos', {
        message: 'testing cardiocare',
        location: 'Lankeswar',
        emergencyContact: '9613086017'
      });

      if (response.data.success) {
        setNotification({ message: 'SOS sent successfully!', type: 'success' });
      } else {
        setNotification({ message: `Failed to send SOS: ${response.data.message}`, type: 'error' });
      }
    } catch (error) {
      setNotification({ message: 'Failed to send SOS, please try again', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.sosButtonContainer}>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      <button
        className={styles.sosButton}
        onClick={handleSosClick}
        disabled={loading}
      >
        {loading ? 'Sending..' : 'SOS'}
      </button>
    </div>
  );
};

export default SosButton;
