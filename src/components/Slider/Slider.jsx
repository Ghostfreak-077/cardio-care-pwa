import React, { useState } from 'react';
import styles from './Slider.module.scss';

const slides = [
  {
    image: '/images/slide1.jpg',
    description: 'Step 1 : Turn on our CardioCare Device ~ "the Hardware modular Device" which is an extended part of this project',
  },
  {
    image: '/images/slide2.jpg',
    description: 'Step 2 : Turn on the hostspot of our Mobile/Laptop Device and click the connect button',
  },
  {
    image: '/images/slide3.jpg',
    description: 'Step 3 : Once connected , we can view our Pulse Rate and Oxygen Level in this interface',
  },
  {
    image: '/images/slide4.jpg',
    description: 'Step 4 : In case of any emergency , click the Alert Button to send a SOS message to the emergency contacts',
  },
  {
    image: '/images/slide5.jpg',
    description: 'Step 5 : Explore the learning pages through daily news , blogs and relevant Videos',
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
