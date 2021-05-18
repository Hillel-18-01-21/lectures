import React, { Component } from "react";
import Feed from "./src/components/Feed.jsx";
import Header from "./src/components/Header.jsx";
import Sidebar from "./src/components/Sidebar.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <Sidebar />
          <Feed />
        </main>
      </div>
    );
  }
}

export default App;
