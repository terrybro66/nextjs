import React, { useState, useEffect } from "react";
import AddProject from "../../components/AddProject";
import ProjectList from "../../components/ProjectList";
import { server } from "../../config/index";
import axios from "axios";

const projects = () => {
  const [projects, setProjects] = useState([]);
  const [reload, setReload] = useState(true);

  const handleReload = () => {
    setReload((reload) => !reload);
  };

  const fetchProjects = async () => {
    const response = await axios({
      method: "get",
      url: "/api/projects/",
    });
    setProjects(response.data);
  };
  useEffect(() => {
    fetchProjects();
  }, [reload]);

  return (
    <div>
      <AddProject reload={handleReload} />

      <ProjectList projects={projects} />
    </div>
  );
};

export default projects;
