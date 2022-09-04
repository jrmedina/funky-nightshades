import React from "react";
import { NavLink } from "react-router-dom";
import "./MiniMovieCards.css";

const MiniMovieCards = ({ id, title, poster, rating, genres }) => {
  console.log(genres[0]);
  
  return (
    <div className="MiniMovieCard">
      <p>{genres[0]}</p>
      <NavLink to={`/${id}`} >
        <img className="poster" src={poster} id={id} alt={title} />
      </NavLink>
      <p>{rating.toFixed(1)}🍅</p>
    </div>
  );
};

export default MiniMovieCards;
