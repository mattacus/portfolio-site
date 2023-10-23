import "./portfolio.css";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json";
import ProfileCard from "./ProfileCard";
import { GlobImages } from "./interfaces";
//@ts-ignore
import * as logos from "./img/logos/*.png";
//@ts-ignore
import * as contentPng from "./img/content/*.png";
//@ts-ignore
import * as contentGif from "./img/content/*.gif";

const Portfolio = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        <ProfileCard />

        <div style={{ height: 16 }} />
        <div className="timeline">
          {projects.map((project, i) => {
            const isEvenItem = i % 2 === 0;
            return (
              <div
                className={`timeline-block ${
                  isEvenItem ? "timeline-block-left" : "timeline-block-right"
                }`}
                key={project.title}
              >
                <div className="marker" />
                <div className="timeline-content">
                  <ProjectCard
                    projectData={project}
                    logoImg={(logos as GlobImages)[project.logo] ?? undefined}
                    imgContent={{ ...contentPng, ...contentGif } as GlobImages}
                    key={project.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
