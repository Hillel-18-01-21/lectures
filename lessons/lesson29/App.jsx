import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  Login,
  Profile
} from './src/containers';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.state.tweets = tweets; // <- DON'T DO THAT
    // this.forceUpdate(); // <- DON'T DO THAT
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;
