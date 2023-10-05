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
  return (
    <div className="project-card">
      <div className="project-card-header">
        <img
          src={`${logos[projectData.logo]}` ?? ""}
          style={{
            height: projectData.logoHeight,
            margin: 4,
          }}
          alt={projectData.title}
          title={projectData.title}
          loading="lazy"
        />
        <div className="project-card-titlegroup">
          <h3 className="project-card-title">{projectData.title}</h3>
          <h3 className="project-card-subtitle">{projectData.dates}</h3>
        </div>
      </div>
      {projectData.copy.map((paragraph) => (
        <p className="project-card-description">{paragraph}</p>
      ))}
    </div>
  );
};

export default ProjectCard;
