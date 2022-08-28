import "./App.css";
import React, { Component } from "react";
import MovieContainer from "../MovieContainer/MovieContainer";
import SpecificMovieCard from "../SpecificMovieCard/SpecificMovieCard";
import { getData } from "../ApiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = { movies: [], clickedImg: [], error: "" };
  }

  componentDidMount = () => {
    getData("/movies", this.handleError).then((data) => {
      this.setState({ movies: [...data[0].movies] });
    });
  };

  // getTrailers = () => {
  //   this.state.movies.forEach((movie) => {
  //     getData(`movies/${movie.id}/videos`).then((data) => console.log('data',data));
  //   });

  // };

  handleError = (error) => {
    this.setState({ error: error });
  };

  getDetails = (event) => {
    let movieId = `/movies/${parseInt(event.target.id)}`;
    getData(movieId, this.handleError).then((data) => {
      this.setState({ clickedImg: Array(data[0].movie) });
    });
  };

  resetState = () => {
    this.setState({ clickedImg: [] });
  };

  render() {
    return (
      <main className="App">
        <h1 className="header">Funky Nightshades</h1>
        {this.state.error && (
          <h3>We apolopgize there was a {this.state.error} error.</h3>
        )}
        {this.state.clickedImg.length ? (
          <SpecificMovieCard
            movieData={this.state.clickedImg}
            resetState={this.resetState}
          />
        ) : (
          <MovieContainer
            movieData={this.state.movies}
            getDetails={this.getDetails}
          />
        )}
      </main>
    );
  }
}

export default App;
