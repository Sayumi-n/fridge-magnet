import React, { Component } from "react";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  };
  onInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onFromSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="container">
          <from onSubmit={this.onFromSubmit} className="white">
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
            </div>
          </from>
        </div>
      </div>
    );
  }
}

export default SignIn;
