import React, { useState, useEffect } from 'react';
import styles from './SelfSlider.module.scss';

const slides = [
  {
    image: '/images/slide1.webp',
    description: 'Portable and User-Friendly Hardware Device',
  },
  {
    image: '/images/slide2.webp',
    description: 'Intuitive and Engaging User Interface',
  },
  {
    image: '/images/slide3.webp',
    description: 'Emergency? Get Help Instantly!',
  },
  {
    image: '/images/slide4.webp',
    description: 'Discover and Enhance Your Daily Life ',
  },
  {
    image: '/images/slide5.webp',
    description: 'Compile and Connect with Emergency Contacts',
  },
];

const SelfSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className={styles.selfSliderWrapper}>

      <div className={styles.slider}>
        
        <div className={styles.slide}>
          <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default SelfSlides;
