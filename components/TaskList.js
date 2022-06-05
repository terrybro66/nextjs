import React from "react";
import TaskCard from "./TaskCard";
import styles from "../styles/TaskList.module.css";

const TaskList = ({ tasks }) => {
  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
};

export default TaskList;
