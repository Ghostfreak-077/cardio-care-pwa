import React, { useState, useEffect } from 'react';
import styles from './SelfSlider.module.scss';

const slides = [
  {
    image: '/images/slide1.jpg',
    description: 'This is how our device works - Step 1',
  },
  {
    image: '/images/slide2.jpg',
    description: 'This is how our device works - Step 2',
  },
  {
    image: '/images/slide3.jpg',
    description: 'This is how our device works - Step 3',
  },
  {
    image: '/images/slide4.jpg',
    description: 'This is how our device works - Step 4',
  },
  {
    image: '/images/slide5.jpg',
    description: 'This is how our device works - Step 5',
  },
];

const SelfSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.selfSliderWrapper}>
      <h2 className={styles.heading}>
        Learn how to operate with our device
      </h2>
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
