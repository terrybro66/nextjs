import React from "react";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
      </div>
      <div>
        <h5>{project.name}</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
