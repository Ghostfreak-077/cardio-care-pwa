import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.image}>
        <img src="/images/logo.webp" alt="" className={styles.logo} />
        <button className={styles.connect}>Connect Device</button>
      </div>
      <div className={styles.emergency}>
        <button className={styles.btn}>Emergency</button>
      </div>
    </div>
  )
}

export default Hero