import React from "react";
import GenerateButton from "./GenerateButton";
import WordList from "../words/WordList";
import UserPhrase from "./UserPhrase";

class CreateProject extends React.Component {
  state = { words: [], selectedWord: [] };

  componentDidMount() {
    this.props.fetchPosts();
  }

  onWordSelect = word => {
    this.setState({ selectedWord: word });
  };

  render() {
    return (
      <div className="" style={{ marginTop: "10px" }}>
        <GenerateButton onSubmit={this.onSearchSubmit} />
        <WordList onWordSelect={this.onWordSelect} words={this.state.words} />

        <UserPhrase word={this.state.selectedWord} />
      </div>
    );
  }
}

export default CreateProject;
