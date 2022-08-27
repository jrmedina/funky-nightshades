import "./App.css";
import React, { Component } from "react";
import movieData from "../movieData";
import MovieContainer from "../MovieContainer/MovieContainer";
import SpecificMovieCard from "../SpecificMovieCard/SpecificMovieCard";
import { getData } from "../ApiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = { movies: [], clickedImg: [] };
  }

  getDetails = (event) => {
    let clicked = this.state.movies.filter(
      (movie) => movie.id === parseInt(event.target.id)
    );
    this.setState({ clickedImg: clicked });
  };

  resetState = () => {
    this.setState({ clickedImg: [] });
  }
  componentDidMount = () => {
    getData()
      .then(data => {
        this.setState({ movies: [...data[0].movies] })
        console.log(`this.state.movies`, this.state.movies)
      })
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
