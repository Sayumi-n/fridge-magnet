import React, { Component } from "react";
import { connect } from "react-redux";
import { thunkActionCreator } from "../../actions/fetchAction";
import WordList from "../words/WordList";

class GenerateButton extends Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    this.props.dispatch(thunkActionCreator(this.state.term));
  };

  render() {
    console.log(this.props.response);
    return (
      <div className="container startBtnArea">
        <form onSubmit={this.onFormSubmit} className="">
          <div className="field">
            <img
              src="https://cdn.pixabay.com/photo/2012/04/12/10/24/refrigerator-29345_1280.png"
              width="80px"
              alt=""
            />
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              className=""
              required
              placeholder="Topic *Noun works best!"
            />

            <input type="submit" value="Get Magnets" className="" />
          </div>
        </form>
        {this.props.data.isFetching ? <h3>Loading...</h3> : null}
        {this.props.data.isError ? <h3>Try with another term.</h3> : null}
        {Object.keys(this.props.data.userData).length > 0 ? (
          <WordList words={this.props.data.userData} />
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

export default connect(mapStateToProps)(GenerateButton);
