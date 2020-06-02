import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions/authAction";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  // handle input change
  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // handle form submit
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onFormSubmit} className="sign-in-form">
            <h5 className="grey-text text-darken-3">Log In</h5>
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
            <div className="input-filed">
              <button className="btn pink lighten-1 z-depth-0">Log In</button>
            </div>

            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>
          <div className="signup-link">
            <p>Doesn't have account yet?</p>
            <p>
              Sign up{" "}
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

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
