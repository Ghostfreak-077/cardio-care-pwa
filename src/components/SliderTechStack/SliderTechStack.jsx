import React, { useEffect, useState } from 'react';
import styles from './SliderTechStack.module.scss';

const logos = [
  { src: '/images/react.png', alt: 'React JS' },
  { src: '/images/nodejs.png', alt: 'Node JS' },
  { src: '/images/mongodb.png', alt: 'Mongo DB' },
  { src: '/images/newsapi.png', alt: 'News API' },
  { src: '/images/videoapi.png', alt: 'Video API' },
  { src: '/images/raspberrypi.png', alt: 'Raspberry Pi' },
  { src: '/images/arduino.png', alt: 'Arduino' },
  { src: '/images/scss.png', alt: 'SCSS' },
  { src: '/images/html.png', alt: 'HTML' },
  { src: '/images/js.png', alt: 'JavaScript' },
  { src: '/images/github.png', alt: 'GitHub' },
];

const SelfSlidingTechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfSlidingTechStack;
