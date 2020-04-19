import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const NavBar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);

  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="nav-wrapper teal lighten-3">
      <Link to="/" className="brand-logo left logo">
        Fridge Haiku{" "}
        <img src="images/fridge.png" alt="" style={{ width: "18px" }} />
      </Link>
      <div className="container">{links}</div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(NavBar);
