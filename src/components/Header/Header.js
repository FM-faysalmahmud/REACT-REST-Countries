import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Welcome to my rest Countries</h1>
      <nav className="menu">
        <a href="/home">Home</a>
        <a href="/countires">Countries</a>
        <a href="/about">About Us</a>
      </nav>
    </div>
  );
};

export default Header;
