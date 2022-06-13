
import { data } from "../data"
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { render } from "@testing-library/react";
import React from "react";
import { type } from "@testing-library/user-event/dist/type";
import { addMovies, setShowFavourite } from "../actions";


class App extends React.Component {


  componentDidMount() {

    const { store } = this.props

    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    })

    store.dispatch(addMovies(data))

    console.log(store.getState())

  }

  isMovieFavourite = (movie) => {

    const { movies } = this.props.store.getState()

    const index = movies.favourites.indexOf(movie)

    if (index !== -1) {

      // found movie

      return true
      
    }
    return false

  }

  onChangeTab = (val) => {

    console.log(val)

    this.props.store.dispatch(setShowFavourite(val))

  }



  render() {

    console.log("render")
    console.log(this.props.store.getState())

    const {movies} = this.props.store.getState()

    const { list, favourites, showFavourite } = movies  //{list:[] , favourite:[]}

    const displayMovies = showFavourite ? favourites : list;

    return (

      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourite ? '' : 'active-tabs'} `} onClick={() => this.onChangeTab(false)}>Movies</div>

            <div className={`tab ${showFavourite ? 'active-tabs' : ''} `} onClick={() => this.onChangeTab(true)}>Favourite</div>
          </div>
        </div>

        <div className="list">
          {displayMovies.map((movie, index) => (

            <Moviecard
              movie={movie}
              key={`movie-${index}`}
              dispatch={this.props.store.dispatch}

              isFavourite={this.isMovieFavourite(movie)}
            />

          ))}

        </div>

        {displayMovies.length === 0 ? <div className="no-movies" style={{display:"flex",justifyContent:"center"}}>No Movies To Display!</div> : null}

      </div>
    );

  }

}

export default App;
