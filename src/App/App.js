import "./App.css";
import React, { Component } from "react";
import MovieContainer from "../MovieContainer/MovieContainer";
import SpecificMovieCard from "../SpecificMovieCard/SpecificMovieCard";
import { getData } from "../ApiCalls";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
class App extends Component {
  constructor() {
    super();
    this.state = { movies: [], error: "", searchInput: "" };
  }

  componentDidMount = () => {
    getData('/').then((data) => {     
       
      data.includes(true)
        ? this.setState({ error: true })
        : this.setState({ movies: [...data[0].movies] });
    });
  };

  resetState = () => {
    this.setState({ movies: [] });
  };

  handleInput = (event) => {
    const results = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({
      searchInput: event.target.value,
      currentResults: results,
    });
  };

  render() {
    return (
      <main className="App">
        <Switch>
          <Route
            exact
            path="/:id"
            render={({ match }) => {
              return (
                <SpecificMovieCard
                  id={parseInt(match.params.id)}
                  resetState={this.resetState}
                />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={() =>
              this.state.searchInput ? (
                <div>
                  <NavBar
                    handleInput={this.handleInput}
                    movies={this.state.movies}
                  />
                  <h2>Search results for: {this.state.searchInput}</h2>
                  <MovieContainer movieData={this.state.currentResults} />
                </div>
              ) : (
                <div>
                  <NavBar
                    handleInput={this.handleInput}
                    movies={this.state.movies}
                  />
                  <MovieContainer movieData={this.state.movies} />
                </div>
              )
            }
          />
        </Switch>

        <Footer />
      </main>
    );
  }
}

export default App;
