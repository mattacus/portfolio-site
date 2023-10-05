import React from "react";
import "./projectCard.css";
import { IProjectData } from "./interfaces";
import { baseURL } from "./const";

interface IProjectCardProps {
  projectData: IProjectData;
  logos: any;
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({
  projectData,
  logos,
}) => {
  const logoPath = projectData.logo;

  return (
    <div className="project-card">
      <img
        src={logos[projectData.logo] ?? ""}
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
