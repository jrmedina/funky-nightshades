import React, { Component } from "react";
import { getData } from "../ApiCalls";
import { Link } from "react-router-dom";
import "./SpecificMovieCard.css";
class SpecificMovieCard extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  componentDidMount = () => {
    const movieId = `/${this.props.id}`;
    getData(movieId).then((data) => {
  
       data.includes(true)
        ? this.setState({ error: true })
        : this.setState({ movie: data[0].movie });
    });

  };

  render() {
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
    } = this.state.movie;



    const rating = `🍅 `.repeat(Math.round(average_rating));

    
    return (
      
        <div className="SpecificMovieCard">
          <Link to="/" className="exit">
            Home
          </Link>
          <h1 className="title">{title}</h1>
          <p className="tagline">{tagline}</p>
          <img className="backdrop" src={backdrop_path} alt={title} />
          <p className="overview">{overview}</p>
          <h2 className="genres">{genres}</h2>
          <h3>{rating} / 10 </h3>
          <h3>Runtime: {runtime} minutes</h3>
          <h3 className="date">Release Date: {release_date}</h3>
          <p className="numeric">
            Budget: ${budget} Revenue: ${revenue}
          </p>
        </div>
      )
    
  }
}

export default SpecificMovieCard;
