import React from "react";
import App from '../App/App'
import MiniMovieCards from "../MiniMovieCards/MiniMovieCards";

const MovieContainer = ({ movieData }) => {
    let mappedMovies = movieData.map(movie => {
        return <MiniMovieCards id={movie.id} title={movie.title} poster={movie.poster_path} rating={movie.average_rating} key={movie.id} />
    })
    return <div>{mappedMovies}</div>
}

export default MovieContainer;