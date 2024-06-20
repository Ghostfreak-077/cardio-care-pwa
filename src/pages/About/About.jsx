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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Why us?</h2>
        <p>
          Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.
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
              <img src="/images/team1.jpg" alt="Team Member" />
            </div>
            <h3>Partha Pratim Deka</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src="/images/team2.jpg" alt="Team Member" />
            </div>
            <h3>Aryadeep Gogoi</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/janesmith" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <img src="/images/team3.jpg" alt="Team Member" />
            </div>
            <h3>Pragya Annesha Baruah</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/bobjohnson" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/bobjohnson" target="_blank" rel="noopener noreferrer">
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
