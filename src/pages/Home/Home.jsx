
import React from 'react';
import Hero from '../../components/Hero/Hero';
import DataAnalysis from '../../components/DataAnalysis/DataAnalysis';
import DataAnalysis2 from '../../components/DataAnalysis/DataAnalysis2';
import Slider from '../../components/Slider/Slider';
import SelfSlider from '../../components/SelfSlider/SelfSlider';
import Map from '../../components/map/map';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <div className={`${styles.nonHero} py-5`}>
        <h1 className='mb-5'>Device Stats</h1>
        <div className={`${styles.charts} container`}>
          <div className={styles.pulse}>
            <h3>Pulse Rate</h3>
            <DataAnalysis />
          </div>
          <div className={`${styles.oxy}`}>
            <h3>Oxygen Level</h3>
            <DataAnalysis2 />
          </div>
          
        </div>
        <SelfSlider/>

        <Slider/>
        <Map/>
      </div>
    </div>
  );
};

export default Home;
