import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
    const containerRef = useRef([]);

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
      { threshold: 0.2 }
    );

    containerRef.current.forEach((category) => {
      if (category) observer.observe(category);
    });

    return () => {
      containerRef.current.forEach((category) => {
        if (category) observer.unobserve(category);
      });
    };
  }, []);
  
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        {skillsData.map((category, index) => (
          <div key={index} className={styles.skillsCategory} ref={(el) => (containerRef.current[index] = el)}>
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            <div className={styles.skills}>
              {category.skills.map((skill, id) => (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  {/* <p>{skill.title}</p> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
