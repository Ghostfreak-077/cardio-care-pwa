import React, { useEffect } from 'react';
import styles from './Hero.module.scss';
import { TbAlertTriangle } from 'react-icons/tb';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroText = document.getElementById('heroText');
      if (heroText) {
        heroText.style.transform = `translateY(${window.scrollY * 0.6}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.welcomeMessage}>Welcome to CardioCare</div>
      <div className={styles.tagline}>Your One Stop Care Tracker</div>
      <div className={styles.emergency}>
        
        <button className={styles.btn}>
          <div className={styles.inner}><TbAlertTriangle /></div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
