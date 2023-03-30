import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.image}>
        <img src="/images/logo.webp" alt="" className={styles.logo} />
      </div>
      <div className={styles.emergency}>
        <button className={styles.btn}>Emergency</button>
      </div>
    </div>
  )
}

export default Hero