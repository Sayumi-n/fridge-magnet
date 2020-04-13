import React from "react";
import moment from "moment";

const ProjectSummary = (project) => {
  if (!project.project.selectedWord) return <p>null</p>;
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
        <p>Phrase by {project.project.authorName}</p>
        <p>
          Created at {moment(project.project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
