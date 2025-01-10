import React, { useRef, useEffect } from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import Lottie from 'react-lottie';
import animationData from '../../../assets/lotties/development.json';

export const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



  return (
    <section className={styles.container} id="about" ref={aboutRef}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/swe-Image.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <span className={styles.animationIcon}>
          <Lottie
            options={defaultOptions}
            height={500}
            width={450}
          />
        </span>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/fullstackIcon.png")} alt="Full Stack icon" id={styles.fullstackIcon} /> */}
            <div className={styles.aboutItemText}>
              <h3 className={styles.aboutTitle}>Full Stack Developer</h3>
              <p className={styles.explaination}>
                I'm a Full Stack Developer who brings a holistic approach to web development, seamlessly combining my expertise in creating dynamic user interfaces with robust server-side logic.
                I thrive in delivering end-to-end solutions that meet the needs of modern, dynamic applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 className={styles.aboutTitle}>UX Designer</h3>
              <p className={styles.explaination}>
              As a UX Designer, I create intuitive, user-centered designs that prioritize accessibility, usability, and satisfaction, ensuring seamless experiences across all platforms.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/devopsIcon.png")} alt="Devops icon" id={styles.devopsIcon} /> */}
            <div className={styles.aboutItemText}>
              <h3 className={styles.aboutTitle}>Devops Engineer</h3>
              <p className={styles.explaination}>
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
