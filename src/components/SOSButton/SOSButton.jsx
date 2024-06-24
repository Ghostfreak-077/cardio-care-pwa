// SosButton.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SOSButton.module.scss';

const SosButton = () => {
  const [loading, setLoading] = useState(false);

  const handleSosClick = async () => {
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/sos', {
        message: 'testing cardiocare',
        location: 'Lankeswar',
        emergencyContact: '9613086017'
      });

      if (response.data.success) {
        toast.success('SOS sent successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 8000, // Adjust autoClose duration as needed
        });
      } else {
        toast.error(`Failed to send SOS: ${response.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 8000,
        });
      }
    } catch (error) {
      toast.error('Failed to send SOS. Please try again.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 8000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.sosButtonContainer}>
      <button
        className={styles.sosButton}
        onClick={handleSosClick}
        disabled={loading}
      >
        {loading ? 'Sending..' : 'SOS'}
      </button>
      <ToastContainer />
    </div>
  );
};

export default SosButton;
