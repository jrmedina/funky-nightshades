import React from "react";
import App from "../App/App";
import MiniMovieCards from "../MiniMovieCards/MiniMovieCards";
import './MovieContainer.css'

const MovieContainer = ({ movieData, getDetails }) => {
  let mappedMovies = movieData.map((movie) => {
    return (
      <MiniMovieCards
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.average_rating}
        key={movie.id}
        getDetails={getDetails}
      />
    );
  });
  return <div className="MovieContainer">{mappedMovies}</div>;
};

export default MovieContainer;
