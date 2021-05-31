import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

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
    const { isLoggedIn } = this.props;
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

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    dispatch({
      type: 'authUpdate',
      payload: false
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
