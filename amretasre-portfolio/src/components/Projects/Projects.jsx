import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Academic Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <div className={styles.buttonContainer}>
      <a href="https://github.com/Amretasre002762670" className={styles.githubBtn}>
            View More
      </a>
      </div>
      
    </section>
  );
};
