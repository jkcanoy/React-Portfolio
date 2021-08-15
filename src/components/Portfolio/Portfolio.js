import React from "react";
import project from "../Project/Project.json";
import ProjectCard from "../Project/Project";
import "./Portfolio.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default function Portfolio() {
  return (
    <main className="container-fluid">
      <h1>Portfolio</h1>
      <hr></hr>

      <Wrapper>
        {project.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deployed={project.deployed}
          />
        ))}
      </Wrapper>
    </main>
  );
}
