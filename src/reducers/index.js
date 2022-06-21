
import { combineReducers } from 'redux'

import {
    Add_Movies,
    Add_Favourite,
    Remove_From_Favourite,
    Set_Show_Favourites,
    Add_Movie_To_List,
    Add_Search_Result

} from "../actions"

var initialMoviesState = {
    list: [],
    favourites: [],
    showFavourite: false

}

export function movies(state = initialMoviesState, action) {

    // // if(action.type === Add_Movies) {
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // // }
    // // return state

    switch (action.type) {

        case Add_Movies:

            return {
                ...state,
                list: action.movies
            }

        case Add_Favourite:

            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }

        case Remove_From_Favourite:

            const filteredArray = state.favourites.filter(movie => movie.Title !== action.movie.Title)
            return {
                ...state,
                favourites: filteredArray
            }

        case Set_Show_Favourites:

            return {
                ...state,
                showFavourite: action.val
            }

        case Add_Movie_To_List:

            return {

                ...state,
                list: [action.movie,...state.list]
            }

        default:
            return state
    }
    
}



var initialSearchState = {
    result: {},
    showSearchResults:false

};

export function search(state = initialSearchState, action) {

    switch (action.type) {

        case  Add_Search_Result:

            return {
                ...state,
                result: action.movie,
                showSearchResults:true
            }
        case Add_Movie_To_List:

            return {
                ...state,
                showSearchResults:false
            }

        default:
            return state;
    }

}



// var initialRootState = {

//     movies: initialMoviesState,
//     search: initialSearchState

// }



// export default function rootReducer(state = initialRootState, action) {

//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }

// }



export default combineReducers({

    movies,
    search

})






