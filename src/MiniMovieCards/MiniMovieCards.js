import React from "react";
import MovieContainer from "../MovieContainer/MovieContainer";
import "./MiniMovieCards.css";

const MiniMovieCards = ({ id, title, poster, rating, getDetails }) => {
  return (
    <div className="MiniMovieCard">
      <h2>{title}</h2>
      <img
        className="poster"
        src={poster}
        id={id}
        alt={title}
        onClick={event => getDetails(event)}
      />
      <p>{rating.toFixed(2)}⭐️</p>
    </div>
  );
};

export default MiniMovieCards;
