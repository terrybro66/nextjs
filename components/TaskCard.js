import React from "react";
import styles from "../styles/TaskCard.module.css";

const TaskCard = ({ task }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
      </div>
      <div>
        <h5>{task.name}</h5>
      </div>
    </div>
  );
};

export default TaskCard;
