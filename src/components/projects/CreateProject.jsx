import React from "react";
import { connect } from "react-redux";
import WordList from "./WordList";
import { thunk_action_creator } from "../../actions/fetchAction";
import Phrase from "./Phrase";

class CreateProject extends React.Component {
  state = {
    selectedWord: "",
    phraseSave: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const userInput = this.getUserInput.value;
    this.props.dispatch(thunk_action_creator(userInput));
    this.getUserInput.value = "";
  };

  onWordSelect = word => {
    this.setState({
      selectedWord: [...this.state.selectedWord, word]
    });
  };
  handleClear = e => {
    e.preventDefault();
    this.setState({
      selectedWord: ""
    });
  };
  onPhraseSave = e => {
    e.preventDefault();
    this.setState({
      phraseSave: [...this.state.selectedWord]
    });
  };
  render() {
    return (
      <div className="row">
        <h4 className="title">Create new poetry</h4>
        <div className="col s12 m12 l7 magnet-area">
          <div className="row">
            <form onSubmit={this.handleSubmit} className="form">
              <div className="input-field user-input col l6 s12 offset-l3">
                <input
                  type="text"
                  className="center"
                  placeholder="Topic *Noun works best!"
                  id="topic"
                  required
                  ref={input => (this.getUserInput = input)}
                />

                <button className="waves-effect waves-light btn magnet-btn blue-grey darken-1">
                  Generate Magnets
                </button>
              </div>
            </form>
          </div>
          <div className="wordList">
            {this.props.data.isFetching ? <p>Loading...</p> : null}
            {this.props.data.isError ? (
              <p className="error">Try with different noun!</p>
            ) : null}
            {Object.keys(this.props.data.userData).length > 0 ? (
              <WordList
                words={this.props.data.userData}
                onWordSelect={this.onWordSelect}
              />
            ) : null}
          </div>
        </div>
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
                <button
                  onClick={this.onPhraseSave}
                  className="waves-effect waves-light btn project-submit-btn blue-grey darken-1"
                >
                  Save
                </button>
                <button
                  onClick={this.handleClear}
                  className="waves-effect waves-light btn project-submit-btn #757575 blue-grey darken-1"
                >
                  Clear
                </button>
                <br />
                <button
                  onClick={this.handleClear}
                  className="waves-effect waves-light btn project-submit-btn#616161 blue-grey darken-1"
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

const mapStateToProps = state => {
  return {
    data: state.async
  };
};
export default connect(mapStateToProps)(CreateProject);
