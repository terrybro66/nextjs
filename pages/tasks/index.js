import React, { useState, useEffect } from "react";
import AddTask from "../../components/AddTask";
import TaskList from "../../components/TaskList";
import axios from "axios";

const tasks = () => {
  const [showTaskForm, setShowTaskForm] = useState(true);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState(true);

  const handleReload = () => {
    setReload((reload) => !reload);
  };
  const handleShowForm = () => {
    setShowTaskForm((showTaskForm) => !showTaskForm);
  };
  const fetchTasks = async () => {
    const response = await axios({
      method: "get",
      url: "/api/tasks",
    });
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [reload]);
  return (
    <div>
      <AddTask reload={handleReload} />

      <h1>Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default tasks;
