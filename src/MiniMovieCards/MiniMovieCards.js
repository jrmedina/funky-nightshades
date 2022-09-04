import React from "react";
import { NavLink } from "react-router-dom";
import "./MiniMovieCards.css";

const MiniMovieCards = ({ id, title, poster, rating }) => {
  return (
    <div className="MiniMovieCard">
      <NavLink to={`/${id}`} >
        <img className="poster" src={poster} id={id} alt={title} />
      </NavLink>
      <p>{rating.toFixed(1)}🍅</p>
    </div>
  );
};

export default MiniMovieCards;
