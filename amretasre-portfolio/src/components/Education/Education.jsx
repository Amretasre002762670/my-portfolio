import React, { useRef, useEffect } from "react";
import styles from "./Education.module.css";
import education from "../../data/eduation.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
  
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {education.map((eduItem, id) => {
            return (
              <li key={id} className={styles.eduItem}>
                <img
                  src={getImageUrl(eduItem.imageSrc)}
                  alt={`${eduItem.school} Logo`}
                  className={styles.image}
                />
                <div className={styles.eduItemDetails}>
                  <h3>{`${eduItem.school}`}</h3>
                  <p className={styles.degree}>{`${eduItem.degree}`}</p>
                  <p className={styles.dates}>{`${eduItem.startDate} - ${eduItem.endDate}`}</p>
                  <ul>
                    {eduItem.courses ? eduItem.courses.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    }) : ""}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
