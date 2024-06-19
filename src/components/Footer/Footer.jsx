import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            
            <div className={styles.footerContent}>
                <div className={styles.leftSection}>
                    <Link to="/">Home</Link>
                    <Link to="/LearnNews">Explore</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className={styles.centerSection}>
                    <div className={styles.logo}>
                        <img src="/images/logo.png" alt="CardioCare Logo" />
                    </div>
                    <div>© 2024 CardioCare. All rights reserved.</div>
                </div>
                <div className={styles.rightSection}>
                    <div>Contact Us !</div>
                    <br></br>
                    <div>Phone: 98456-73890</div>
                    <div>Email: CardioCare@gmail.com</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
