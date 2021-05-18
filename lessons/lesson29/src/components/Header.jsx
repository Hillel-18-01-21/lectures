import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="nav-brand">
            <i className="nes-icon twitter is-medium"></i>
            <p className="nes-text">Nester</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
