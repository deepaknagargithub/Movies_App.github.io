
// action type
export const Add_Movies = "Add_Movies"

export const Add_Favourite = "Add_Favourite"

export const Remove_From_Favourite = "Remove_From_Favourite"

export const Set_Show_Favourites = "Set_Show_Favourites"




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



