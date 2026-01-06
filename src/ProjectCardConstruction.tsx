import React from "react";
import "./projectCard.css";

const ProjectCardConstruction: React.FunctionComponent = () => {
  const warningIcon = new URL("./img/icons/warning.svg", import.meta.url);

  return (
    <div className="project-card float-on-hover border-gradient">
      <div className="project-card-header" style={{ justifyContent: "center", alignItems: "center" }}>
        <div className="project-card-titlegroup" style={{ textAlign: "center", width: "100%" }}>
          <h3 className="project-card-title" style={{
            fontSize: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px"
          }}>
            <img src={String(warningIcon)} alt="warning" width={32} height={32} style={{ color: "#f59e0b" }} />
            Under Construction
            <img src={String(warningIcon)} alt="warning" width={32} height={32} style={{ color: "#f59e0b" }} />
          </h3>
        </div>
      </div>
      <div className="project-card-description">
        <div>
          <p>My portfolio page is currently undergoing a rework, but will be back up again soon!</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardConstruction;
