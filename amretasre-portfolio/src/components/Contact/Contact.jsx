import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import Lottie from 'react-lottie';
import animationData from '../../../assets/lotties/contact.json';

export const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <span className={styles.animation}>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
        </span>
        {/* <p>Feel free to reach out!</p> */}
      </div>
      <ul className={styles.links}>
        <li><h3 className={styles.title}>Contact Me</h3></li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:rengarajanthiruven.a@northeastern.edu">rengarajanthiruven.a@northeastern.edu</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:amretasrert@gmail.com">amretasrert@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/amretasre-rengarajan-thiruvengadam/">linkedin.com/amretasre-rengarajan-thiruvengadam</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Amretasre002762670">github.com/Amretasre002762670</a>
        </li>
      </ul>
    </footer>
  );
};
