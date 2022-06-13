import Link from "next/link";
import React from "react";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={project.image} />
      </div>
      <Link href="/projects/[_id]" as={`/projects/${project._id}`}>
        <a>{project.name}</a>
      </Link>
    </div>
  );
};

export default ProjectCard;
