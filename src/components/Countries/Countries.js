import React, { useState } from "react";
import Country from "../Country/Country";
import "./Countires.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setCountries(data));

  return (
    <div>
      <h2>Hello From Countires - {countries.length}</h2>
      <div className="countries-cointainer">
        {countries.map((country) => (
          <Country country={country} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
