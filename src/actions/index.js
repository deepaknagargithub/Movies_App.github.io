// import { type } from "@testing-library/user-event/dist/type";

import { type } from "@testing-library/user-event/dist/type"
import { createRoot } from "react-dom/client"

// {
//     type: 'Add_Movies'
// }

// {
//     type: 'decrease_count'
// }


// action type
export const Add_Movies = "Add_Movies"



// action creator

export function addMovies(data) {

    return{
        type:Add_Movies,
        movies: data
    }

    
}



