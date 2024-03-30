import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/swe-Image.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/fullstackIcon.png")} alt="Full Stack icon" id={styles.fullstackIcon} />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
              I'm a Full Stack Developer with a versatile skill set, proficient in both front-end and back-end technologies. I bring a holistic approach to web development, seamlessly combining my expertise in creating dynamic user interfaces with robust server-side logic. 
              From crafting engaging user experiences to optimizing database performance, I thrive in delivering end-to-end solutions that meet the needs of modern, dynamic applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/devopsIcon.png")} alt="Devops icon" id={styles.devopsIcon} />
            <div className={styles.aboutItemText}>
              <h3>Devops Engineer</h3>
              <p>
              I automate CI/CD pipelines for efficient software delivery and ensure scalable infrastructure. 
              I prioritize system optimization, security, and collaborative practices for streamlined operations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
