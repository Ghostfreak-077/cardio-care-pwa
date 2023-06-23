import React, { useEffect } from 'react'
import styles from './Hero.module.scss'
import {TbAlertTriangle} from 'react-icons/tb'

const Hero = () => {

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      const heroText =  document.getElementById('heroText')
      heroText.style.transform = `translateY(${window.scrollY*0.6}px)`
    })
  },[])

  return (
    <div className={styles.hero}>
      <div className={styles.text} id='heroText'>
        {/* <img src="/images/logo.webp" alt="" className={styles.logo} /> */}
        Welcome to <br /><span className={styles.title}>CardioCare</span>
      </div>
      <div className={styles.emergency}>
        <button className={styles.btn}>
          <div className={styles.inner}><TbAlertTriangle/></div>
        </button>
      </div>
    </div>
  )
}

export default Hero