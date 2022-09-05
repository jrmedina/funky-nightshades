import React from "react";
import "./NavBar.css";
import magnify from "../assets/search.png";
import logo from "../assets/funky-nightshade.svg";

const NavBar = ({ handleInput }) => {
  return (
    <div className="NavBar">
      <div className="header">
        <h1 className="title">Funky Nightshades</h1>
        <img className="logo" src={logo} alt="funky"/>
      </div>
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
