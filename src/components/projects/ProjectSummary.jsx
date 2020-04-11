import React from "react";

const ProjectSummary = (project) => {
  return (
    <div className="card">
      <div className="card-content project-summary-phrase">
        {project.project.selectedWord.map((word, index) => {
          return (
            <span className="wordItem-dashboard" key={index}>
              {word}
            </span>
          );
        })}
      </div>

      <div className="card-content ">
        <p>Phrase by Sayumi</p>
        <p>Created at 3pm</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
