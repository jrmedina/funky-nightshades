import React, { Component } from "react";
import { getData } from "../ApiCalls";
import { Link } from "react-router-dom";
import "./SpecificMovieCard.css";

class SpecificMovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      isLoading: false,
    };
  }

  componentDidMount = () => {
    this.setState({ movie: this.props.movieData, isLoading: false });
    let movieId = `/movies/${parseInt(this.state.movie.id)}`;
    getData(movieId, this.handleError).then((data) => {
      console.log(data);
    });
  };

  handleError = (error) => {
    this.setState({ error: error });
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

    let rating = `🍅 `.repeat(Math.round(average_rating));

    return !this.state.isLoading ? (
      <div>
        <Link to="/" className="exit">
          Return
        </Link>
        <h1 className="title">{title}</h1>
        <p className="tagline">{tagline}</p>
        <img className="backdrop" src={backdrop_path} alt={title} />
        <p className="overview">{overview}</p>
        <h3>{rating} / 10 </h3>
        <h3>Runtime: {runtime} minutes</h3>
        <h3>Release Date: {release_date}</h3>
      </div>
    ) : (
      <h1>Loading...</h1>
    );
  }
}

export default SpecificMovieCard;
