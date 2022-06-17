import React from "react";
import { connect } from "react-redux";
import { handleMovieSearch, addMovieToList } from "../actions"




class Navbar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showSearchResults: false,
            searchText: ''
        }

    }

    handleAddToMovies = (movie) => {

        this.props.dispatch(addMovieToList(movie));

        this.setState({
            showSearchResults: false
        })

    }


    handleSearch = () => {

        const { searchText } = this.state

        this.props.dispatch(handleMovieSearch(searchText));

    }


    handleChange = (e) => {

        this.setState({
            searchText: e.target.value
        })

    }



    render() {

        const { result: movie, showSearchResults } = this.props.search

        return (

            <div className="nav">
                <div className="search-container">

                    <input onChange={this.handleChange} />
                    <button type="" id="search-btn" onClick={this.handleSearch}>search</button>

                    {showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={movie.Poster} alt="search-pic" />
                                <div className="movie-info">
                                    <span>{movie.Title}</span>
                                    <button type="" onClick={() => this.handleAddToMovies(movie)}>
                                        Add To Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        );
    }
}


// class NavbarWrapper extends React.Component {

//     render() {
//         return (
//             <StoreContext.Consumer>
//                 {(store) => <Navbar dispatch={store.dispatch} search={this.props.search} />}
//             </StoreContext.Consumer>
//         )
//     }

// }



function mapStateToProps(state) {
    return {
        search:state.search,
    }
};

const connectedNavbarComponents = connect(mapStateToProps)(Navbar)

export default connectedNavbarComponents;
