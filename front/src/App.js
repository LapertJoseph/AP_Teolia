import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./App.css";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import StudentsList from "./components/Students";
import RealStudents from "./components/RealStudents";
import RandomChampion from "./components/Champion";
import FilteredHouse from "./components/FilteredHouse";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/students">Student of Poudlard</Link>
        <Link to="/realStudent">Complete List of student</Link>
        <Link to="/random">Goblet of Fire's Champion</Link>
        <Link to="/filter">Filtered House</Link>
      </nav>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/realStudent" element={<RealStudents />} />
        <Route path="/random" element={<RandomChampion />} />
        <Route path="/filter" element={<FilteredHouse />} />
      </Routes>
    </div>
  );
};

export default App;
