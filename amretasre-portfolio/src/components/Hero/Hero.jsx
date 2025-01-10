import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

import Lottie from 'react-lottie';
import animationData from '../../../assets/lotties/women-working-2.json';
import handWave from '../../../assets/lotties/hi.json'

export const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptionsHand = {
    loop: true,
    autoplay: true,
    animationData: handWave,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Amretasre Rengarajan Thiruvengadam</span>
          <span className={styles.lottieIcon}>
            <Lottie
              options={defaultOptionsHand}
              height={70}
              width={70}
            /></span>
        </h1>
        <p className={styles.description}>
        Full-Stack Developer passionate about crafting advanced web applications and seamless user experiences. 
        Skilled in <span className={styles.boldText}>JavaScript (ReactJS, NodeJS, ExpressJS)</span>{" "}, <span className={styles.boldText}>Java</span>, and <span className={styles.boldText}>UI/UX design</span>, 
        with expertise in Agile and DevOps. Dedicated to building intuitive, scalable, and impactful digital solutions.
        A proactive team player committed to delivering top-notch results.
        </p>
        <div className={styles.iconContainer}>
          <a href="https://www.linkedin.com/in/amretasre-rengarajan-thiruvengadam/" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
            <img
              src={getImageUrl("icons/linkedin.png")}
              alt="LinkedIn"
              className={styles.icon}
            />
          </a>
          <a href="mailto:rengarajanthiruven.a@northeastern.edu" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
            <img
              src={getImageUrl("icons/mail.png")}
              alt="Email"
              className={styles.icon}
            />
          </a>
          <a href="https://github.com/Amretasre002762670" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
            <img
              src={getImageUrl("icons/github.png")}
              alt="GitHub"
              className={styles.icon}
            />
          </a>
        </div>
        <div className={styles.buttonContainer}>

          <a href="#contact" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1lO0Wqy5q3KMHuOT_jPEhV1i7vhye8ne2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            View Resume
          </a>
        </div>
      </div>

      <span className={styles.girlLottie}>
        <Lottie
          options={defaultOptions}
          height={400}
          width={600}
        />
      </span>

      {/* <img
        src={getImageUrl("hero/Amreta-short.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
