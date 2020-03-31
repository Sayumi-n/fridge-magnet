import React from "react";
import CreateProject from "./projects/CreateProject";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Dashboard from "./dashboard/Dashboard";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/create" component={CreateProject} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
