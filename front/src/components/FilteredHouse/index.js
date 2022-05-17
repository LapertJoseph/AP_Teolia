import React, { useState } from "react";
import axios from "axios";
import logo from "../../Blason_Gryffondor.svg.png";
import "./styles.css";

const FilteredHouse = () => {
  const [house, setHouse] = useState([]);

  const handleFilterdHouse = async (house) => {
    const result = await axios.get(`http://localhost:3000/real/students`);
    const res = result.data.filter((e) => e.hogwartsHouse === house);
    setHouse(res);
  };

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" /> <br />
      <button onClick={() => handleFilterdHouse("Gryffindor")}>
        Gryffondor
      </button>
      <button onClick={() => handleFilterdHouse("Slytherin")}>
        Serpentard
      </button>{" "}
      <br />
      <button onClick={() => handleFilterdHouse("Hufflepuff")}>
        Poufsouffle
      </button>
      <button onClick={() => handleFilterdHouse("Ravenclaw")}>Serdaigle</button>
      <ul>
        {house.map((house, index) => (
          <li key={`FilteredHouse${index}`}>{house.character}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredHouse;
