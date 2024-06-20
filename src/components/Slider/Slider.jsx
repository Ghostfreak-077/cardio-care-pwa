import React, { useState } from 'react';
import styles from './Slider.module.scss';

const slides = [
  {
    image: '/images/slide1.jpg',
    description: 'Step 1 : Turn on our CardioCare Device ~ "the Hardware Device" ',
  },
  {
    image: '/images/slide2.jpg',
    description: 'Step 2 : ',
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

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.sliderWrapper}>
      <h2 className={styles.heading}>Learn how to operate with our device</h2>
      <div className={styles.slider}>
        <button className={styles.prev} onClick={prevSlide}>❮</button>
        <div className={styles.slide}>
          <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
          <p>{slides[currentIndex].description}</p>
        </div>
        <button className={styles.next} onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default Slider;
