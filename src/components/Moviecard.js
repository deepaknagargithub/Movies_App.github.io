import React from "react";
import { addFavourite, removeFavourite } from "../actions";



class Moviecard extends React.Component {

    handlFavouriteClick = () => {

        const { movie } = this.props

        this.props.dispatch(addFavourite(movie))

    }

    handlUnFavouriteClick = () => {

        const { movie } = this.props

        console.log("chalgya")

        this.props.dispatch(removeFavourite(movie))


    }

    render() {

        const { movie, isFavourite } = this.props

        return (

            <div className="movie-card">

                <div className="left">

                    <img src={movie.Poster} alt="movie-poster" />

                </div>

                <div className="right">

                    <div className="title">{movie.Title}</div>

                    <div className="plot">{movie.Plot}</div>

                    <div className="footer">

                        <div className="rating">{movie.imdbRating}</div>

                        {
                            isFavourite ? <button type="" className="unfavourite-btn" onClick={this.handlUnFavouriteClick}>Unfavourite</button> : <button type="" className="favourite-btn" onClick={this.handlFavouriteClick}>Favourite</button>

                        }


                    </div>

                </div>



            </div>


        );

    }

}

export default Moviecard;
