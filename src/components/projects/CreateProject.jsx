import React from "react";
import { connect } from "react-redux";
// import WordList from "./WordList";
// import { thunk_action_creator } from "../../actions/fetchAction";
import Phrase from "./Phrase";
import { createProject } from "../../actions/projectAction";
import GenerateMagnet from "./GenerateMagnet";
// import { Redirect } from "react-router-dom";

class CreateProject extends React.Component {
  state = {
    selectedWord: "",
  };

  onWordSelect = (word) => {
    this.setState({
      selectedWord: [...this.state.selectedWord, word],
    });
  };
  handleClear = (e) => {
    e.preventDefault();
    this.setState({
      selectedWord: "",
    });
  };
  onPhraseSave = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    // if (!auth.uid) return <Redirect to="/signin" />;
    // console.log(this.state.selectedWord);
    return (
      <div className="row">
        <h5 className="title">Create new poetry</h5>
        <GenerateMagnet onWordSelect={this.onWordSelect} />
        <div className="col s12 m12 l5 center phrase-area">
          <div className="row">
            <div className="phrase-container">
              <Phrase
                word={this.state.selectedWord}
                key={this.state.selectedWord.index}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12 project-submit">
              <form>
                {!this.state.selectedWord && auth.uid === false ? (
                  <button
                    onClick={this.onPhraseSave}
                    className="waves-effect waves-light btn project-submit-btn blue-grey darken-1"
                  >
                    Save
                  </button>
                ) : null}
                {/* <button
                  onClick={this.onPhraseSave}
                  className="waves-effect waves-light btn project-submit-btn blue-grey darken-1"
                >
                  Save
                </button> */}
                <button
                  onClick={this.handleClear}
                  className="waves-effect waves-light btn project-submit-btn blue-grey darken-1 "
                >
                  Clear
                </button>

                <button
                  onClick={this.handleClear}
                  className="waves-effect waves-light btn project-submit-btn  blue-grey darken-1"
                >
                  Save as an image&thinsp;<i className="far fa-image"></i>
                </button>
                <button
                  onClick={this.handleClear}
                  className="waves-effect waves-light btn project-submit-btn blue-grey darken-1"
                >
                  Share with twitter&thinsp;<i className="fab fa-twitter"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
