import { ReactElement } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './portfolio.css';
import ImageContainer from './ImageContainer';
import ProjectCard from './ProjectCard';
import projects from './data/projects.json';
import { useWindowSize } from 'usehooks-ts';
//@ts-ignore
import * as logos from './img/logos/*.png';

const MOBILE_WIDTH = 768;

const Portfolio = () => {
  // const parallaxTest = () => {
  //   let elements: ReactElement[] = [];
  //   for (let _ of Array(10).keys()) {
  //     elements.push(
  //       <Parallax translateX={["400px", "0px"]}>
  //         <TextContainer />
  //       </Parallax>
  //     );
  //   }
  //   return elements;
  // };

  const { width } = useWindowSize();

  return (
    <div className="wrapper">
      <div className="main-container">
        <h1 className="message">Portfolio Site</h1>
        {/* {parallaxTest()} */}
        <div style={{ height: 16 }} />
        {/* <ImageContainer /> */}

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
                {width > MOBILE_WIDTH ? (
                  <Parallax
                    translateX={[0, isEvenItem ? -5 : 5]}
                    translateY={[0, 5]}
                  >
                    <ProjectCard projectData={project} logos={logos} />
                  </Parallax>
                ) : (
                  <ProjectCard projectData={project} logos={logos} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
