import React, { useEffect } from "react";
import Lottie from "react-lottie";
import styles from "./Education.module.css";
import education from "../../data/eduation.json";
import { getImageUrl } from "../../utils";
import girlStudyingAnimation from "../../../assets/lotties/girl-studying.json";
import educationAnimation from "../../../assets/lotties/graduate.json";

export const Education = () => {

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

    const items = document.querySelectorAll(`.${styles.eduItem}`);
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: girlStudyingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsGraduate = {
    loop: true,
    autoplay: true,
    animationData: educationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.gridContainer}>
        {/* <div className={styles.lottieContainer}>
          <Lottie options={defaultOptions} height={200} width={200} />
        </div> */}
        {education.map((eduItem, id) => (
          <div key={id} className={styles.row}>
            {id % 2 === 0 ? (
              <>
                <div className={`${styles.eduItem} ${styles.zigzagLeft}`}>
                  <img
                    src={getImageUrl(eduItem.imageSrc)}
                    alt={`${eduItem.school} Logo`}
                    className={styles.image}
                  />
                  <div className={styles.eduItemDetails}>
                    <h3>{eduItem.school}</h3>
                    <p className={styles.degree}>{eduItem.degree}</p>
                    <p className={styles.dates}>{eduItem.startDate} - {eduItem.endDate}</p>
                    <ul className={styles.courses}>
                      {eduItem.courses && eduItem.courses.map((course, index) => (
                        <li key={index} >{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.lottieContainer}>
                  <div className={styles.lottieContainer}>
                    <Lottie options={defaultOptions} height={200} width={600} />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.lottieContainer}>
                  <div className={styles.lottieContainer}>
                    <Lottie options={defaultOptionsGraduate} height={200} width={1000} />
                  </div>
                </div>
                <div className={`${styles.eduItem} ${styles.zigzagRight}`}>
                  <img
                    src={getImageUrl(eduItem.imageSrc)}
                    alt={`${eduItem.school} Logo`}
                    className={styles.image}
                  />
                  <div className={styles.eduItemDetails}>
                    <h3>{eduItem.school}</h3>
                    <p className={styles.degree}>{eduItem.degree}</p>
                    <p className={styles.dates}>{eduItem.startDate} - {eduItem.endDate}</p>
                    <ul>
                      {eduItem.courses && eduItem.courses.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

      </div>
    </section>
  );
};

