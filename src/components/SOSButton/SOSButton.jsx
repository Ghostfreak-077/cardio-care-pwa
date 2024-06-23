import React from 'react';
import styles from './SOSButton.module.scss';

const sendEmergencyMessage = async (userId) => {
  try {
    const response = await fetch('http://localhost:5000/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });
    const result = await response.json();
    if (result.success) {
      alert('Emergency message sent successfully!');
    } else {
      alert(`Failed to send emergency message: ${result.message}`);
    }
  } catch (error) {
    console.error('Error sending emergency message:', error);
    alert('An error occurred while sending the emergency message.');
  }
};

const SOSButton = ({ userId }) => {
  const handleClick = () => {
    sendEmergencyMessage(userId);
  };

  return (
    <button className={styles.sosButton} onClick={handleClick}>
      SOS
    </button>
  );
};

export default SOSButton;
