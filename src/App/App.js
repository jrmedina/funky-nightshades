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
    this.state = { movies: [], error: "", searchInput: "", filteredArray: [] };
  }

  componentDidMount = () => {
    getData("/movies", this.handleError).then((data) => {
      data.includes(true) ? this.setState({ error: true }) :
        this.setState({ movies: [...data[0].movies] });
    });
  };

  handleError = (error) => {
    this.setState({ error: error });
  };

  resetState = () => {
    this.setState({ clickedImg: [] });
  };

  handleInput = (event) => {
    this.setState({ searchInput: `${event.target.value}` })
    console.log('Inputt', this.state.searchInput)
    let handledVariable = this.state.movies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({ filteredArray: handledVariable })
  }
  render() {
    return (
      <main className="App">
        <h1 className="header">Funky Nightshades</h1>
        <NavBar handleInput={this.handleInput} />
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
              this.state.searchInput ? <div><p>Search Results For:{this.state.searchInput}</p><MovieContainer movieData={this.state.filteredArray} /></div> :
                <MovieContainer movieData={this.state.movies} />}
          />
        </Switch>

        <Footer />
      </main>
    );
  }
}

export default App;
