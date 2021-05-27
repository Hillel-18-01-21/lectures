import React from "react";

import MainFeed from "./MainFeed.jsx";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Home = (props) => (
  <div>
    <Header />
    <main className="container">
      <Sidebar />
      <MainFeed />
    </main>
  </div>
);

export default Home;
