import React from "react";
import { connect } from "react-redux";
import Phrase from "./Phrase";
import { createProject } from "../../actions/projectAction";
import GenerateMagnet from "./GenerateMagnet";
// import { Redirect } from "react-router-dom";
import html2canvas from "html2canvas";
import SaveImage from "./SaveImage";

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

  onImageSave = (elementId) => () => {
    html2canvas(document.getElementById(elementId), {
      logging: true,
      letterRendering: 1,
      allowTaint: false,
      useCORS: true,
      scale: 2.5,
      width: 340,
      height: 250,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpg");
      link.download = "screenshot.jpg";
      link.click();
      console.log(link);
    });
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
          <div className="phrase-container" id="sheet">
            <SaveImage elementId="sheet">
              <Phrase
                word={this.state.selectedWord}
                key={this.state.selectedWord.index}
              />
            </SaveImage>
          </div>

          <div className="">
            <div className="col s12 m12 l12 project-submit">
              {!this.state.selectedWord === false && !auth.uid === false ? (
                <button
                  onClick={this.onPhraseSave}
                  className="waves-effect waves-light btn project-submit-btn blue-grey darken-1"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={this.onPhraseSave}
                  className="waves-effect waves-light disabled btn project-submit-btn blue-grey darken-1"
                >
                  Save
                </button>
              )}

              <button
                onClick={this.handleClear}
                className="waves-effect waves-light btn project-submit-btn blue-grey darken-1 "
              >
                Clear
              </button>
              <button
                onClick={this.onImageSave("sheet", "1")}
                className="waves-effect waves-light btn project-submit-btn  blue-grey darken-1"
              >
                Save as an image&thinsp;<i className="far fa-image"></i>
              </button>

              <button
                onClick={this.handleClear}
                className="disabled waves-effect waves-light btn project-submit-btn blue-grey darken-1"
              >
                Share with twitter&thinsp;<i className="fab fa-twitter"></i>
              </button>
              <p>*Sign up to save your Haiku.</p>
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
