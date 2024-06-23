import React, { useEffect, useState } from 'react';
import styles from './Hero.module.scss';
import { TbAlertTriangle } from 'react-icons/tb';
import TypingText from '../TypingText/TypingText';
import Loader from '../Loader/Loader';

const Hero = () => {
  const [loading, setLoading] = useState(true); // State to control the loader

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  if (loading) {
    return <Loader />; // Show loader when loading
  }

  return (
    <div className={styles.hero}>
      <div className={styles.welcomeMessage}>Welcome to CardioCare</div>
      <div className={styles.tagline}>"Your One Stop Care Tracker"</div>
      <div className={styles.emergency}>
        <button className={styles.btn}>
          <div className={styles.inner}><TbAlertTriangle /></div>
        </button>
      </div>
      <TypingText />
    </div>
  );
};

export default Hero;
