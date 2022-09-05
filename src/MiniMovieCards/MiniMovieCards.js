import React from "react";
import { NavLink } from "react-router-dom";
import "./MiniMovieCards.css";
import logo from "../assets/funky-nightshade.svg";

const MiniMovieCards = ({ id, title, poster, rating, genres }) => {
  return (
    <div className="MiniMovieCard">
      <p>{genres[0]}</p>
      <NavLink to={`/${id}`}>
        <img className="poster" src={poster} id={id} alt={title} />
      </NavLink>
      <p className="rating">
        {rating.toFixed(1)}
        <img src={logo} alt="funky" />
      </p>
    </div>
  );
};

export default MiniMovieCards;
