import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

import Lottie from 'react-lottie';
import { animationDataMap } from '../../utils';
// import animationData from '../../../assets/lotties/computer-2.json';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, animationDataKey },
}) => {
  const animationData = animationDataMap[animationDataKey];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className={styles.container}>
      {/* <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      /> */}
      <Lottie
          options={defaultOptions}
          height={200}
          width={300}
        />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
