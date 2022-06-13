import { server } from "../../config/index";

export const getStaticPaths = async () => {
  const res = await fetch(server + "/api/projects");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((project) => {
    return {
      params: { id: project._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(server + "/api/projects/" + id);
  const data = await res.json();
  console.log("data", data);
  return {
    props: { project: data },
  };
};

const Details = ({ project }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <h2>{project.name}</h2>
    </div>
  );
};

export default Details;
