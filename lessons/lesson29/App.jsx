import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import {
  Home,
  Login,
  Profile
} from './src/containers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: !!localStorage.getItem('auth-token')
    };
  }

  componentDidMount() {
    // this.state.tweets = tweets; // <- DON'T DO THAT
    // this.forceUpdate(); // <- DON'T DO THAT
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/login" render={props => {
            return isLoggedIn ? <Redirect to="/" /> : <Login {...props}/>;
          }} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
