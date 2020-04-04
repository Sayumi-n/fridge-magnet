import React from "react";
import { connect } from "react-redux";
import WordList from "./WordList";
import { thunk_action_creator } from "../../actions/fetchAction";

class GenerateMagnet extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const userInput = this.getUserInput.value;
    this.props.dispatch(thunk_action_creator(userInput));
    this.getUserInput.value = "";
  };

  render() {
    return (
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
              onWordSelect={this.props.onWordSelect}
            />
          ) : null}
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

export default connect(mapStateToProps)(GenerateMagnet);
