import "./App.css";
import React, { Component } from "react";
import MovieContainer from "../MovieContainer/MovieContainer";
import SpecificMovieCard from "../SpecificMovieCard/SpecificMovieCard";
import { getData } from "../ApiCalls";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = { movies: [], error: "" };
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

  render() {
    return (
      <main className="App">
        <h1 className="header">Funky Nightshades</h1>
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
                this.state.error ? <h2>We apologize there has been an error!</h2> :
            <MovieContainer movieData={this.state.movies} />}
          />
        </Switch>

            <Footer/>
      </main>
    );
  }
}

export default App;
