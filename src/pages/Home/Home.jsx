import React from 'react'
import Hero from '../../components/Hero/Hero'
import DataAnalysis from '../../components/DataAnalysis/DataAnalysis'
import DataAnalysis2 from '../../components/DataAnalysis/DataAnalysis2'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero/>
      <h1>Pulse Rate</h1>
      <DataAnalysis/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Oxygen Level</h1>
      <DataAnalysis2/>
      <br/>
      <br/>
      <br/>
      <br/><br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Home
