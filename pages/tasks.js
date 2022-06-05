import React from "react";
import Project from "../models/projectModel";
import { dbConnect } from "../utils/db";

const projects = ({ projects }) => {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div>{project.name}</div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  dbConnect();

  const projects = await Project.find();
  return {
    props: { projects: JSON.parse(JSON.stringify(projects)) },
  };
}

export default projects;
