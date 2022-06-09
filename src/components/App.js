
import { data } from "../data"
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { render } from "@testing-library/react";
import React from "react";
import { type } from "@testing-library/user-event/dist/type";
import { addMovies } from "../actions";

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


  render() {

    console.log("render")

    const { list } = this.props.store.getState()  //{list:[] , favourite:[]}

    return (

      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourite</div>
          </div>
        </div>

        <div className="list">
          {list.map((movie, index) => (
            <Moviecard movie={movie} key={`movie-${index}`} />
          ))}

        </div>

      </div>
    );

  }

}

export default App;
