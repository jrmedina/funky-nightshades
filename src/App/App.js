import "./App.css";
import React, { Component } from "react";
import movieData from "../movieData";
import MovieContainer from "../MovieContainer/MovieContainer";

class App extends Component {
  constructor() {
    super();
    this.state = { movies: movieData.movies };
  }
  render() {
    return (
      <div className="App">
        <h1>Funky Nightshades</h1>
        <MovieContainer movieData={this.state.movies} />
      </div>
    );
  }
}

export default App;
