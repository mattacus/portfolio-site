import React from "react";
import "./projectCard.css";
import { GlobImages, IProjectData } from "./interfaces";
import ImageContainer from "./ImageContainer";

interface IProjectCardProps {
  projectData: IProjectData;
  logoImg?: string;
  imgContent: GlobImages;
}

const getProjectImages = (fullList: GlobImages, projectList: string[]) => {
  return projectList.reduce((result: GlobImages, current) => {
    if (Object.keys(fullList).includes(current)) {
      result[current] = fullList[current];
    }
    return result;
  }, {});
};

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({
  projectData,
  logoImg,
  imgContent,
}) => {
  return (
    <div className="project-card float-on-hover">
      <div className="project-card-header">
        {logoImg ? (
          <img
            src={`${logoImg}`}
            style={{
              height: projectData.logoHeight,
              margin: 4,
            }}
            alt={projectData.title}
            title={projectData.title}
            loading="lazy"
          />
        ) : (
          <div />
        )}
        <div className="project-card-titlegroup">
          <h3 className="project-card-title">{projectData.title}</h3>
          <h3 className="project-card-subtitle">{projectData.dates}</h3>
        </div>
      </div>
      {projectData.imgContent && (
        <div className="project-card-img-content">
          <ImageContainer
            images={getProjectImages(imgContent, projectData.imgContent)}
            projectTitle={projectData.title}
          />
        </div>
      )}
      <div className="project-card-description">
        {projectData.copy.map((paragraph) => (
          <div key={paragraph}>
            <p>{paragraph}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
