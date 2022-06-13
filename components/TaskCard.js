import Link from "next/link";
import React from "react";
import Timer from "./Timer";
import styles from "../styles/TaskCard.module.css";

const TaskCard = ({ task }) => {
  return (
    <div className={styles.card}>
      <div>
        <h2>{task.project}</h2>
        <p>{task.task}</p>
      </div>
      <div className={styles.timer}>
        <Timer task={task} />
      </div>
    </div>
  );
};

export default TaskCard;
