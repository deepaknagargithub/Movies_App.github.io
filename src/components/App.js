
import { data } from "../data"
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { render } from "@testing-library/react";
import React from "react";
import { type } from "@testing-library/user-event/dist/type";
import { addMovies, setShowFavourite } from "../actions";
// import { StoreContext } from "../index"
// import { connect } from "../index";

import {connect} from "react-redux"


class App extends React.Component {



  componentDidMount() {
    this.props.dispatch(addMovies(data))

    // const { store } = this.props

    // store.subscribe(() => {

    //   console.log("props");
    //   this.forceUpdate();
    // })

    // store.dispatch(addMovies(data))
  }




  isMovieFavourite = (movie) => {

    const { movies } = this.props

    const index = movies.favourites.indexOf(movie)

    if (index !== -1) {

      // found movie

      return true

    }
    return false

  }



  onChangeTab = (val) => {

    this.props.dispatch(setShowFavourite(val))

  }



  render() {

    // console.log("Render")
    // console.log(this.props.store.getState())

    const { movies, search } = this.props

    const { list, favourites, showFavourite } = movies  //{list:[] , favourite:[]}

    const displayMovies = showFavourite ? favourites : list;

    return (

      <div className="App">

        <Navbar search={search} />

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

              dispatch={this.props.dispatch}

              isFavourite={this.isMovieFavourite(movie)}
            />

          ))}

        </div>

        {displayMovies.length === 0 ? <div className="no-movies" style={{ display: "flex", justifyContent: "center" }}>No Movies To Display!</div> : null}

      </div>
    );

  }

}

// class AppWrapper extends React.Component {

//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     )
//   }

// }


function mapStateToProps(state) {

  return {
    movies: state.movies,
    search: state.movies
  }

};
const connectedAppComponents = connect(mapStateToProps)(App)

export default connectedAppComponents;
