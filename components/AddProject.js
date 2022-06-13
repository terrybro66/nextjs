import React, { useRef } from "react";
import styles from "../styles/AddProject.module.css";

const AddProject = ({ reload }) => {
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);
    const response = await fetch("/api/projects", {
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
        <h3>Add a project</h3>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="name" />
          <input type="text" name="description" />
          <input type="text" name="image" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProject;
