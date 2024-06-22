import React, { useEffect, useState } from 'react';
import styles from './SliderTechStack.module.scss';

const logos = [
  { src: '/images/react.webp', alt: 'React JS' },
  { src: '/images/node.webp', alt: 'Node JS' },
  { src: '/images/mongo.webp', alt: 'Mongo DB' },
  { src: '/images/newsapi.webp', alt: 'News API' },
  { src: '/images/videoapi.webp', alt: 'Video API' },
  { src: '/images/figma.webp', alt: 'Figma' },
  { src: '/images/arduino.webp', alt: 'Arduino' },
  { src: '/images/sass.webp', alt: 'SCSS' },
  { src: '/images/html.webp', alt: 'HTML' },
  { src: '/images/jabascript.webp', alt: 'JavaScript' },
  { src: '/images/github.webp', alt: 'GitHub' },
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
