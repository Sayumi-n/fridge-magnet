import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects, auth }) => {
  return (
    <div className="col s12 m12">
      {projects &&
        projects.map((project) => {
          return (
            <ProjectSummary project={project} key={project.id} auth={auth} />
          );
        })}
    </div>
  );
};

export default ProjectList;
