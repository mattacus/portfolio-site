import { ReactElement } from "react";
import { Parallax } from "react-scroll-parallax";
import "./portfolio.css";
import ImageContainer from "./ImageContainer";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json";

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

  const testProject = projects[0];

  return (
    <div className="wrapper">
      <div className="main-container">
        <h1 className="message">Portfolio Site</h1>
        {/* {parallaxTest()} */}
        <div style={{ height: 200 }} />
        {/* <ImageContainer /> */}
        <ProjectCard projectData={testProject} />
      </div>
    </div>
  );
};

export default Portfolio;
