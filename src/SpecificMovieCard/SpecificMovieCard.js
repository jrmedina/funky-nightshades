import React from "react";
import "./SpecificMovieCard.css";

const SpecificMovieCard = ({ movieData, resetState }) => {
  const [movie] = movieData;
  const {
    title,
    backdrop_path,
    average_rating,
    release_date,
    overview,
    genres,
    budget,
    runtime,
    revenue,
    tagline,
  } = movie;
  let rating = `⭐️`.repeat(Math.round(average_rating));

  return (
    <div className="SpecificMovieCard">
      <button className="exit" onClick={resetState}>
        Return
      </button>
      <h1 className="title">{title}</h1>
      <p>"{tagline}"</p>
      <img className="backdrop" src={backdrop_path} alt={title} />
      <p className="overview">{overview}</p>
      <h2>{genres.join(", ")}</h2>
      <p>
        Budget: {budget} Revenue: {revenue}
      </p>
      <h3>Runtime: {runtime}</h3>
      <h3>{rating} / 10 </h3>
      <h3>{release_date}</h3>
    </div>
  );
};

export default SpecificMovieCard;
