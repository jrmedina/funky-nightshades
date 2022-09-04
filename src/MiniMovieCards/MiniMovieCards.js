import React from "react";
import { NavLink } from "react-router-dom";
import "./MiniMovieCards.css";

const MiniMovieCards = ({ id, title, poster, rating, genres }) => {
  

  
  return (
    <div className="MiniMovieCard">
      <NavLink to={`funky-nightshades/${id}`}>
        <img className="poster" src={poster} id={id} alt={title} />
      </NavLink>
      <p className="rating">{rating.toFixed(1)}🍅</p>
    </div>
  );
};

export default MiniMovieCards;
