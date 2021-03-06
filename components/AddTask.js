import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styles from "../styles/AddTask.module.css";

const AddTask = ({ reload }) => {
  const [project, setProject] = useState("");
  const [task, setTask] = useState("");
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);
    const response = await fetch("/api/tasks", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: formDataJsonString,
    });
    const data = await response.json();
    reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.addForm}>
        <h3>Add a task</h3>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="project" />
          <input type="text" name="task" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
