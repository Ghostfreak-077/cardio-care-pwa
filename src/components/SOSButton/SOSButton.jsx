import React from 'react';
import { TbAlertTriangle } from 'react-icons/tb';
import styles from './SOSButton.module.scss';

const SOSButton = ({ sendSOS }) => {
  return (
    <div className={styles.sosContainer}>
      <button className={styles.sosButton} onClick={sendSOS}>
        <TbAlertTriangle className={styles.icon} />
        <span className={styles.text}>SOS</span>
      </button>
    </div>
  );
};

export default SOSButton;
