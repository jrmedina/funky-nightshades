import React from "react";
import MovieContainer from "../MovieContainer/MovieContainer";

const MiniMovieCards = ({ id, title, poster, rating }) => {
    return <div><h1>{title}</h1><img src={poster} /><p1>{rating}</p1></div>
}

export default MiniMovieCards;