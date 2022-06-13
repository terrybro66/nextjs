import React, { useState, useEffect } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import styles from "../styles/Timer.module.css";

const Timer = ({ task }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const addTime = async () => {
    const projName = task.project;
    const response = await fetch("/api/tasks/times", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        times: seconds,
        project: projName,
      }),
    });
  };

  function toggle() {
    setIsActive(!isActive);
    if (seconds !== 0) {
      addTime();
      setSeconds(0);
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className={styles.container}>
      <div className={styles.time}>{seconds}s</div>
      <div className={styles.controls}>
        <a className={isActive ? "active" : "inactive"} onClick={toggle}>
          {isActive ? <FaStop /> : <FaPlay />}
        </a>
      </div>
    </div>
  );
};

export default Timer;
