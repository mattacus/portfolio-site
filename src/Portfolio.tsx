import { Parallax } from 'react-scroll-parallax';
import './portfolio.css';
import ProjectCard from './ProjectCard';
import projects from './data/projects.json';
import { useWindowSize } from 'usehooks-ts';
import { GlobImages } from './interfaces';
//@ts-ignore
import * as logos from './img/logos/*.png';
//@ts-ignore
import * as content from './img/content/*.png';

const Portfolio = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        <h1 className="message">Portfolio Site</h1>

        <div style={{ height: 16 }} />
        <div className="timeline">
          {projects.map((project, i) => {
            const isEvenItem = i % 2 === 0;
            return (
              <div
                className={`timeline-block ${
                  isEvenItem ? 'timeline-block-left' : 'timeline-block-right'
                }`}
                key={project.title}
              >
                <div className="marker" />
                <div className="timeline-content">
                  <ProjectCard
                    projectData={project}
                    logoImg={(logos as GlobImages)[project.logo] ?? ''}
                    imgContent={content as GlobImages}
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
