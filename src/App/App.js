import "./App.css";
import React, { Component } from "react";
import movieData from "../movieData";
import MovieContainer from "../MovieContainer/MovieContainer";
import SpecificMovieCard from "../SpecificMovieCard/SpecificMovieCard";

class App extends Component {
  constructor() {
    super();
    this.state = { movies: movieData.movies, clickedImg: [] };
  }

  getDetails = (event) => {
    let clicked = this.state.movies.filter(
      (movie) => movie.id === parseInt(event.target.id)
    );
    this.setState({ clickedImg: clicked });
  };

  resetState = () =>{
this.setState({ clickedImg: []});
  }
  render() {
    return (
      <div className="App">
        <h1>Funky Nightshades</h1>
        {this.state.clickedImg.length ? (
          <SpecificMovieCard movieData={this.state.clickedImg} resetState={this.resetState} />
        ) : (
          <MovieContainer
            movieData={this.state.movies}
            getDetails={this.getDetails}
          />
        )}
      </div>
    );
  }
}

export default App;
