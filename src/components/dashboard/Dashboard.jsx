import React from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <Link to="/create" className="dashboard-link">
          <button className="waves-effect waves-light btn project-submit-btn  blue-grey darken-1">
            Create new Haiku!
          </button>
        </Link>
        <div className="row">
          <div className="col s12 m12 l12">
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(Dashboard);
