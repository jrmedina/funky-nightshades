import React from "react";
import "./SpecificMovieCard.css";

const SpecificMovieCard = ({ movieData, resetState }) => {
  // const [movie] = movieData;
  console.log('movie data', movieData)
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
  } = movieData;

  let rating = `🍅 `.repeat(Math.round(average_rating));

  return movieData ? (
    <div className="SpecificMovieCard">
      <button className="exit" onClick={resetState}>
        Return
      </button>
      <h1 className="title">{title}</h1>
      <p className="tagline">{tagline}</p>
      <img className="backdrop" src={backdrop_path} alt={title} />
      <p className="overview">{overview}</p>
      {/* <h2>{genres.join(", ")}</h2> */}
      <h3>{rating} / 10 </h3>
      <h3>Runtime: {runtime} minutes</h3>
      <h3>Release Date: {release_date}</h3>
      <p>
        {/* Budget: ${budget.toLocaleString()} Revenue: ${revenue.toLocaleString()} */}
      </p>
    </div>
  ) : <p>loading...</p>
};

export default SpecificMovieCard;
