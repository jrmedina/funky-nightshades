import "./App.css";
import React, { Component } from "react";
import MovieContainer from "../MovieContainer/MovieContainer";
import SpecificMovieCard from "../SpecificMovieCard/SpecificMovieCard";
import { getData } from "../ApiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = { movies: [], clickedImg: [] };
  }

  getDetails = (event) => {
    let movieId = `/movies/${parseInt(event.target.id)}`;
    getData(movieId).then((data) => {
      this.setState({ clickedImg: new Array(data[0].movie) });
    });
  };

  resetState = () => {
    this.setState({ clickedImg: [] });
  };
  componentDidMount = () => {
    getData("/movies").then((data) => {
      this.setState({ movies: [...data[0].movies] });
    });
  };
  render() {
    return (
      <main className="App">
        <h1 className="header">Funky Nightshades</h1>

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
