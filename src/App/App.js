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
    this.state = { movies: [], error: "", searchInput: "", currentResults: [] };
  }

  componentDidMount = () => {
    getData("/movies").then((data) => {
      data.includes(true)
        ? this.setState({ error: true })
        : this.setState({ movies: [...data[0].movies] });
    });

    let stuff = this.state.movies.filter(movie => {
      getData(`/movies/${movie.id}`)
    })
    console.log(stuff);
    
  };

  resetState = () => {
    this.setState({ movies: [] });
  };

  handleInput = (event) => {
    const currentResults = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({
      searchInput: event.target.value,
      filteredArray: currentResults,
    });
  };

  render() {
    return (
      <main className="App">
      
        <NavBar handleInput={this.handleInput} movies={this.state.movies}/>
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
                  <h3>Search results for: {this.state.searchInput}</h3>
                  <MovieContainer movieData={this.state.filteredArray} />
                </div>
              ) : (
                <MovieContainer movieData={this.state.movies} />
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
