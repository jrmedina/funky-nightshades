import React from "react";
import { NavLink } from "react-router-dom";
import "./MiniMovieCards.css";

const MiniMovieCards = ({ id, title, poster, rating, getDetails }) => {
    return (
        <NavLink to={`/${id}`} className="MiniMovieCard">
            <h2>{title}</h2>
            <img
                className="poster"
                src={poster}
                id={id}
                alt={title}
                onClick={(event) => getDetails(event)}
            />
            <p>{rating.toFixed(1)}🍅</p>
        </NavLink>
    );
};

export default MiniMovieCards;
