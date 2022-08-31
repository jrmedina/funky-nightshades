import "./App.css";
import React, { Component } from "react";
import MovieContainer from "../MovieContainer/MovieContainer";
import SpecificMovieCard from "../SpecificMovieCard/SpecificMovieCard";
import { getData } from "../ApiCalls";
import { Route, Switch } from "react-router-dom";

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

  handleError = (error) => {
    this.setState({ error: error });
  };

  getDetails = (event) => {
    let movieId = `/movies/${parseInt(event.target.id)}`;
    getData(movieId, this.handleError).then((data) => {
      this.setState({ clickedImg: data[0].movie });
    });
  };

  resetState = () => {
    this.setState({ clickedImg: [] });
  };

  render() {
    return (
      <main className="App">
        <h1 className="header">Funky Nightshades</h1>
        <Switch>
          <Route
            exact
            path="/:id"
            render={({match}) => {
              let toRender= this.state.movies.find(movie => movie.id === parseInt(match.params.id)
              )
              return (
                <SpecificMovieCard
                  movieData={toRender}
                  resetState={this.resetState}
                />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={() => (
              <MovieContainer
                movieData={this.state.movies}
                getDetails={this.getDetails}
              />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
