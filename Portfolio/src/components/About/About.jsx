import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/roboIcon.png")} 
              alt="Cursor icon"
            />
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
               src= {getImageUrl("about/serverIcon.png")}
               alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3>OS</h3>
              <p>
              I have hands-on experience in Operating Systems development using 
              C programming, including process management with fork and exec, 
              multithreading with pthread, file operations with system calls, 
              memory allocation simulations, and basic scheduling algorithms 
              such as Round Robin.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
               src= {getImageUrl("about/uiIcon.png")}
               alt="UI icon"
            />
            <div className={styles.aboutItemText}>
              <h3>OOP</h3>
              <p>
              I have experience in Object-Oriented Programming (OOP) 
              with Java and some C++, including concepts such as inheritance,
              polymorphism, encapsulation, abstraction, and interface 
              implementation, and I use ANT and XML for project compilation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
