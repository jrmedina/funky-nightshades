import React, { Component } from "react";
import { getData } from "../ApiCalls";
import { Link } from "react-router-dom";
import "./SpecificMovieCard.css";
import ReactPlayer from "react-player";

class SpecificMovieCard extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      videos: [],
    };
  }

  componentDidMount = () => {
    const movieId = `/${this.props.id}`;
    getData(movieId).then((data) => {
      data.includes(true)
        ? this.setState({ error: true })
        : this.setState({
            movie: data[0].movie,
            videos: data[0].movie.videos[0],
          });
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
    const url = `https://www.youtube.com/watch?v=${this.state.videos.key}`;

    return (
      <div className="SpecificMovieCard">
        <Link to="/" className="exit" onClick={this.props.resetState}>
          Home
        </Link>
        <h1 className="title">{title}</h1>
        <h3>{rating} / 10 </h3>
        <img className="backdrop" src={backdrop_path} alt={title} />
        <div className="lower">
          <div className="lower-left">
            <p className="overview">{overview}</p>
            <h2 className="genres">{genres}</h2>
            <h3 className="runtime">Runtime: {runtime}</h3>
            <h3 className="date">Release Date: {release_date}</h3>
            <p className="numeric">
              Budget: {budget} Revenue: {revenue}
            </p>
          </div>
          <div className="lower-right">
            <ReactPlayer
              url={`${url}`}
              playing={true}
              light={true}
              className="player"
            />
            <p className="tagline">{tagline}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecificMovieCard;
