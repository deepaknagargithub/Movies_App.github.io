
// action type
export const Add_Movies = "Add_Movies"

export const Add_Favourite = "Add_Favourite"

export const Remove_From_Favourite = "Remove_From_Favourite"

export const Set_Show_Favourites = "Set_Show_Favourites"

export const Add_Movie_To_List = "Add_Movie_To_List"

export const Add_Search_Result = "Add_Search_Result"


// action creator

export function addMovies(data) {

    return {
        type: Add_Movies,
        movies: data,
    }

}


export function addFavourite(movie) {

    return {
        type: Add_Favourite,
        movie: movie
    }

}


export function removeFavourite(movie) {

    return {
        type: Remove_From_Favourite,
        movie: movie
    }

}



export function setShowFavourite(val) {

    return {
        type: Set_Show_Favourites,
        val: val
    }

}


export function addMovieToList(movie) {

    return {
        type: Add_Movie_To_List,
        movie
    }

}



export function handleMovieSearch(movie) {

    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`
    return function(dispatch) {
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log("movie", movie)
            dispatch(addMovieSearchResult(movie))
        })

    }
  

}

export function addMovieSearchResult(movie) {
    return {
        type: Add_Search_Result,
        movie
    }
}


