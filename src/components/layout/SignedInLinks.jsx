import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/authAction";

const SignedInLinks = (props) => {
  return (
    <ul id="nav-mobile" className="right">
      <li className="hide-on-small-only">
        <NavLink to="/create">Create New</NavLink>
      </li>
      <li>
        <a href="/" onClick={props.signOut}>
          Log out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn teal darken-1 hide-on-small-only">
          {props.profile.name}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
