import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../actions/authAction";
import { Link } from "react-router-dom";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
    name: "",
  };
  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  onFromSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <div className="container ">
          <form onSubmit={this.onFromSubmit} className="sign-in-form ">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.onInputChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.onInputChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" onChange={this.onInputChange} />
            </div>
            <div className="input-filed">
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
              <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </form>
          <div className="signup-link">
            <p>Already have an account?</p>
            <p>
              Log in{" "}
              <Link to="/signup" className="here">
                Here
              </Link>
              .
            </p>
            <p>
              <Link to="/create" className="here">
                or Use without account.
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
