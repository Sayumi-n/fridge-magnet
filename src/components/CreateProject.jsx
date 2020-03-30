import React from "react";
import { connect } from "react-redux";
import WordList from "./WordList";
import { thunk_action_creator } from "../actions/fetchAction";

class CreateProject extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const userInput = this.getUserInput.value;
    this.props.dispatch(thunk_action_creator(userInput));
    this.getUserInput.value = "";
  };

  onWordSelect = word => {
    this.setState({
      selectedWord: word
    });
  };
  render() {
    console.log(this.props.data);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">Create new poetry</h2>
          <input
            type="text"
            className=""
            placeholder="Topic *Noun works best!"
            required
            ref={input => (this.getUserInput = input)}
          />
          <button className="button">Generate Magnets</button>
        </form>
        {this.props.data.isFetching ? <h3>Loading...</h3> : null}
        {this.props.data.isError ? (
          <h3 className="error">Try with different noun!</h3>
        ) : null}
        {Object.keys(this.props.data.userData).length > 0 ? (
          <WordList
            words={this.props.data.userData}
            onWordSelect={this.onWordSelect}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(CreateProject);
