import React from 'react'
import styles from './Profile.module.scss'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"></link>


const Profile = () => {
  return (
    <div className={styles.profile}>
        <h3 className={styles.heading}>User Dashboard</h3>

        <div className={styles.user}>
        
        <img src="/images/user.webp" alt="" className={styles.userimg} />
        <div className={styles.userdetail}>Hello !</div>
        
        </div>

        <div className={styles.biodata}>
        <img src="/images/height.webp" alt="" className={styles.height} />
        <p>58 kg</p>
        <img src="/images/weight.webp" alt="" className={styles.weight} />

            
        </div>



    </div>
  )
}

export default Profile


