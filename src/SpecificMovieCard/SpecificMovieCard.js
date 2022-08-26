import { getByTitle } from "@testing-library/react";
import React from "react";
import "./SpecificMovieCard.css";

const SpecificMovieCard = ({movieData, resetState}) => {
 const [movie] = movieData;
 const { title, backdrop_path, average_rating, release_date } = movie; 
    
  return (
    <div className="SpecificMovieCard">
        <button onClick={resetState}>❌</button>
      <h2>{title}</h2>
      <img className="backdrop" src={backdrop_path} alt={title} />
      <p>{average_rating.toFixed(2)}⭐️</p>
      <p>{release_date}</p>
    </div>
  );
};

export default SpecificMovieCard;
