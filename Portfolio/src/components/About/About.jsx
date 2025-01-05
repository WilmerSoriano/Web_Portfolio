import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="assets/about/aboutImage.png"
          alt="Buisness Man"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img 
               src="assets/about/cursorIcon.png" 
               alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Computer Science</h3>
              <p>
                  I am driven by a passion for innovation and a desire to solve real-world problems through technology.<br/> 
                  My interests include Machine Learning, advancing Artificial Intelligence, designing efficient algorithms,
                  and creating impactful solutions that empower others.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img 
               src="assets/about/serverIcon.png"
               alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3>OS</h3>
              <p>
                I have experience...
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
               src="assets/about/uiIcon.png"
               alt="UI icon"
            />
            <div className={styles.aboutItemText}>
              <h3>OOP</h3>
              <p>
                I have
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
