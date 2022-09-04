import React from "react";
import "./NavBar.css";
import magnify from "../assets/search.png";

const NavBar = ({ handleInput }) => {
  return (
    <div className="NavBar">
      <h1 className="header">Funky Nightshades</h1>
      <nav className="search-box">
        <input
          className="input"
          type="text"
          placeholder="Search by title"
          onChange={handleInput}
        />
        <img className="magnify" src={magnify} alt="magnify" />
      </nav>
    </div>
  );
};

export default NavBar;
