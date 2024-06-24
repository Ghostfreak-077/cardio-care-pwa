// Hero.jsx
import React, { useEffect } from 'react';
import styles from './Hero.module.scss';
import TypingText from '../TypingText/TypingText';
import SosButton from '../SOSButton/SOSButton';
import 'react-toastify/dist/ReactToastify.css';

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
      <div className={styles.tagline}>"Your One Stop Care Tracker"</div>
      <div className={styles.emergency}>
        <SosButton />
      </div>
      <TypingText />
    </div>
  );
};

export default Hero;
