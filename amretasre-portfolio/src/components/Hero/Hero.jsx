import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amretasre Rengarajan Thiruvengadam</h1>
        <p className={styles.description}>
        Full-stack developer adept in all stages of advanced web application development. 
        Having industry working experience in enterprise applications development, knowledgeable in front-end development, testing, troubleshooting, agile, and DevOps processes. Proficient in JavaScript technologies including ReactJS, NodeJS, ExpressJS as well as Java technologies. 
        Effective team player and self-driven in effectively managing deliverables 
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Amreta-short.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
