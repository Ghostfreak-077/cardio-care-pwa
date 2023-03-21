import React from 'react'
import Hero from '../../components/Hero/Hero'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero/>
    </div>
  )
}

export default Home
