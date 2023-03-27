import React from 'react'
import styles from './Navbar.module.scss'
import {FiHome} from 'react-icons/fi'
// import {AiOutlineLineChart} from 'react-icons/ai'
import {CgProfile, CgNotes} from 'react-icons/cg'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {

  const location = useLocation().pathname

  return (
    <div className={styles.navbar}>
      <ul>
        <li className={location === '/'?styles.sel:''}><Link to='/'><FiHome/></Link></li>
        {/* <li className={location === '/analysis'?styles.sel:''}><Link to='analysis'><AiOutlineLineChart/></Link></li> */}
        <li className={location === '/LearnNews'?styles.sel:''}><Link to='/LearnNews'><CgNotes/></Link></li>
        <li className={location === '/dashboard'?styles.sel:''}><Link to='/dashboard'><CgProfile/></Link></li>
      </ul>
    </div>
  )
}

export default Navbar
