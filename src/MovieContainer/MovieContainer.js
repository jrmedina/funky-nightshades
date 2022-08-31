import React from "react";
import MiniMovieCards from "../MiniMovieCards/MiniMovieCards";
import './MovieContainer.css'

const MovieContainer = ({ movieData }) => {
    let movieCards = movieData.map((movie) => {
        return (
            <MiniMovieCards
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.average_rating}
                key={movie.id}
            />
        );
    });
    return <div className="MovieContainer">{movieCards}</div>;
};

export default MovieContainer;
