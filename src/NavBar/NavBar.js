import React from "react";
import "./NavBar.css"
import magnify from "../assets/search.png"


const NavBar = ({ handleInput, movies }) => {
 
    
    return (
      <div >
        <h1 className="header">Funky Nightshades</h1>
        <nav className="search-box">
          <input
            className="input"
            type="text"
            placeholder="Search by title"
            onChange={handleInput}
          />
          <img className="magnify" src={magnify} />
        </nav>
      </div>
    );
}

export default NavBar