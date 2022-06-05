import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/ProjectList.module.css";

const ProjectList = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
