import React from "react";
import logo from "../../../img/hogwarts.png"
import "../../../App.css";
import StudentsList from "../../Students";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Here is a list of all students :</p>
        <StudentsList />
      </header>
    </div>
  );
};

export default Home;
