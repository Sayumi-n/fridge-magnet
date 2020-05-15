import React, { useState } from "react";
import { connect } from "react-redux";
import Phrase from "./Phrase";
import { createProject } from "../../actions/projectAction";
import GenerateMagnet from "./GenerateMagnet";
// import { Redirect } from "react-router-dom";
import html2canvas from "html2canvas";
import SaveImage from "./SaveImage";

// class CreateProject extends React.Component {
const CreateProject = (props) => {
  // state = {
  //   selectedWord: "",
  // };

  const [state, setState] = useState({ selectedWord: "" });

  const onWordSelect = (word) => {
    setState({
      selectedWord: [...state.selectedWord, word],
    });
  };
  const handleClear = (e) => {
    e.preventDefault();
    setState({
      selectedWord: "",
    });
  };
  const onPhraseSave = (e) => {
    e.preventDefault();
    props.createProject(state);
    props.history.push("/");
  };

  const onImageSave = (elementId) => () => {
    html2canvas(document.getElementById(elementId), {
      logging: true,
      letterRendering: 1,
      allowTaint: false,
      useCORS: true,
      scale: 2.5,
      width: 320,
      height: 250,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpg");
      link.download = "screenshot.jpg";
      link.click();
      console.log(link);
    });
  };

  // render() {
  const { auth } = props;
  // if (!auth.uid) return <Redirect to="/signin" />;
  // console.log(this.state.selectedWord);

  return (
    <div className="row">
      <h5 className="title">Create new poetry</h5>
      <GenerateMagnet onWordSelect={onWordSelect} />
      <div className="col s12 m12 l5 center phrase-area">
        <div className="phrase-container">
          <SaveImage elementId="sheet">
            <Phrase word={state.selectedWord} key={state.selectedWord.index} />
          </SaveImage>
        </div>

        <div className="">
          <div className="col s12 m12 l12 project-submit">
            {!state.selectedWord === false && !auth.uid === false ? (
              <button
                onClick={onPhraseSave}
                className="waves-effect waves-light btn project-submit-btn blue-grey darken-1"
              >
                Save
              </button>
            ) : (
              <button
                onClick={onPhraseSave}
                className="waves-effect waves-light disabled btn project-submit-btn blue-grey darken-1"
              >
                Save
              </button>
            )}

            <button
              onClick={handleClear}
              className="waves-effect waves-light btn project-submit-btn blue-grey darken-1 "
            >
              Clear
            </button>
            <button
              onClick={onImageSave("sheet", "1")}
              className="waves-effect waves-light btn project-submit-btn  blue-grey darken-1"
            >
              Save as an image&thinsp;<i className="far fa-image"></i>
            </button>

            <button
              onClick={handleClear}
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
};
// }

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
