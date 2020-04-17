import React from "react";
import moment from "moment";

const ProjectSummary = ({ project, auth }) => {
  if (project.authorId !== auth.uid) return null;
  return (
    <div className="card">
      <div className="card-content project-summary-phrase">
        {project.selectedWord.map((word, index) => {
          return (
            <span className="wordItem-dashboard" key={index}>
              {word}
            </span>
          );
        })}
      </div>

      <div className="card-content ">
        <p>Phrase by {project.authorName}</p>
        <p>Created at {moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
