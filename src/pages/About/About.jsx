import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './About.module.scss';
import SelfSlidingTechStack from '../../components/SliderTechStack/SliderTechStack';


const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.logoSection}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.section}>
        <h2>What we do?</h2>
        <p>
        CardioCare integrates seamlessly with our portable wearable device to track pulse rates and oxygen levels. It provides an SOS emergency feature to notify emergency contacts instantly. Additionally, users can learn and explore various health-related topics through our comprehensive pages.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Why us?</h2>
        <p>
        We prioritize security and ensure your data is protected. Our user-friendly interface makes learning and exploring health topics easy and enjoyable. Our platform is designed to be intuitive and easy to use, catering to users of all ages.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Tech Stack</h2>
        <SelfSlidingTechStack />
      </div>
      <div className={styles.section}>
        <h2>Meet the team</h2>
        <div className={styles.team}>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src="/images/partha.webp" alt="Team Member" />
            </div>
            <h3>Partha Pratim Deka</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Ghostfreak-077/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/partha-pratim-deka-46a406203/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src="/images/Aryadeep.webp" alt="Team Member" />
            </div>
            <h3>Aryadeep Gogoi</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Arya-Deep-31" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aryadeep-gogoi-696609236/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src="/images/pragya.webp" alt="Team Member" />
            </div>
            <h3>Pragya Annesha Baruah</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Prag03" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/pragya-annesha-baruah-34a043229" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
