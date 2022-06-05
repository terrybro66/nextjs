import React from "react";
import ProjectList from "../components/ProjectList";

const projects = () => {
  const projects = [
    { name: "Minecraft" },
    { name: "Bloom" },
    { name: "Minecraft" },
    { name: "Bloom" },
    { name: "Minecraft" },
    { name: "Bloom" },
    { name: "Minecraft" },
    { name: "Bloom" },
    { name: "Minecraft" },
    { name: "Bloom" },
    { name: "Minecraft" },
    { name: "Bloom" },
  ];
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
};

export default projects;
