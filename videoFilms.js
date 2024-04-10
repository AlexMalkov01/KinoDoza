"use strict"

import { GET_FILM_LIST , API_HEADERS , GET_VIDEO } from "./index.js" 

class VideiFilms {

    static async urlVideo (filmId) {
        const response = await fetch(`${GET_VIDEO}/${filmId}/videos`,{
            headers: API_HEADERS
        })
        const videoUrl = await response.json()
        return await videoUrl
    }
} 

export { VideiFilms } 