import React, { useState } from 'react'
import styles from './Learning.module.scss'
import { Link } from 'react-router-dom'
import Blogs from '../../components/Learning/Blogs'
import News from '../../components/Learning/News'
import Videos from '../../components/Learning/Videos'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"></link>

const Profile = (props) => {
  const [learning, setLearning] = useState('blogs')
  return (
    <>
      <div className={styles.Learning}>
        <h2 className={styles.heading}>Learning Section</h2>
        <div className={styles.buttons}>

          <li className={styles.button1} onClick={() => { setLearning('blogs') }}>Blogs</li>
          <li className={styles.button2} onClick={() => { setLearning('news') }}>News</li>
          <li className={styles.button3} onClick={() => { setLearning('videos') }}>Videos</li>
        </div>
      </div>
      {learning === 'blogs' ? <Blogs /> : learning === 'news' ? <News /> : <Videos />}
    </>
  )
}

export default Profile


