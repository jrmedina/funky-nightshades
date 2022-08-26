import React from "react";
import MovieContainer from "../MovieContainer/MovieContainer";
import "./MiniMovieCards.css";

const MiniMovieCards = ({ id, title, poster, rating }) => {
  return (
    <div className="MiniMovieCard">
      <h2>{title}</h2>
      <img className="poster"src={poster} />
      <p1>{rating.toFixed(2)}⭐️</p1>
    </div>
  );
};

export default MiniMovieCards;
