import { ReactElement } from "react";
import TextContainer from "./TextContainer";
import { Parallax } from "react-scroll-parallax";
import "./portfolio.css";

const Portfolio = () => {
  const parallaxTest = () => {
    let elements: ReactElement[] = [];
    for (let _ of Array(10).keys()) {
      elements.push(
        <Parallax translateX={["400px", "0px"]}>
          <TextContainer />
        </Parallax>
      );
    }
    return elements;
  };

  return (
    <div className="wrapper">
      <div className="main-container">
        <h1 className="message">Portfolio Site</h1>
        {parallaxTest()}
      </div>
    </div>
  );
};

export default Portfolio;
