import React from "react";
import "./projectCard.css";
import { IProjectData } from "./interfaces";

interface IProjectCardProps {
  projectData: IProjectData;
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({
  projectData,
}) => {
  const logo = new URL("./img/pst_logo.png", import.meta.url);
  console.log(logo);
  console.log(String(logo));

  return (
    <div className="project-card">
      <img
        src={String(logo)}
        style={{
          width: 250,
          height: 150,
        }}
        alt={projectData.title}
        title={projectData.title}
        loading="lazy"
      />
      {projectData.copy.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
};

export default ProjectCard;
