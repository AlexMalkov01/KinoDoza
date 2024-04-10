"use strict" 

import { GET_FILM_LIST , API_HEADERS , GET_VIDEO } from "./index.js"
import { VideiFilms } from "./videoFilms.js"

class KinoDose {

    async pageLoading(url) {
        const response = await fetch(url, {
            headers: API_HEADERS ,
        });

        const jsonResponse = await response.json(); 
        const filmItems = await jsonResponse.items;

        console.log(filmItems); 

         await filmItems.forEach((el)=>{

        VideiFilms.urlVideo(el.kinopoiskId).then( res => {

            const element = document.createElement("div")
            element.classList.add("card")

            if (el.ratingKinopoisk == null) {
                element.innerHTML = `
                <a href="${res.items[0].url}" target="_blank">
                <img src="${el.posterUrlPreview}" alt="" class="img_card">
                </a>
       <div class="title_wrap">

           <h1 class="film_name">${el.nameRu}</h1> 

           <div class="film_yaer">
           ${el.year} Год.
           </div>

           <div class="film_janr">
               Жанр: ${el.genres[0].genre}
           </div>

            </div>
                `
                document.querySelector(".wrapper_card").appendChild(element);  
               return
            } 

            element.innerHTML = `
           <div class="wrapper_reiting">
           ${el.ratingKinopoisk}
       </div>
       <a href="${res.items[0].url}" target="_blank">
       <img src="${el.posterUrlPreview}" alt="" class="img_card">
       </a>
       <div class="title_wrap">

           <h1 class="film_name">${el.nameRu}</h1> 

           <div class="film_yaer">
           ${el.year} Год.
           </div>

           <div class="film_janr">
               Жанр: ${el.genres[0].genre}
           </div>
       </div>
           `
        if (el.ratingKinopoisk < 6) {
            element.querySelector(".wrapper_reiting").classList.add("wrapper_reiting--red") 
        } else if (el.ratingKinopoisk < 7) {
            element.querySelector(".wrapper_reiting").classList.add("wrapper_reiting--yellow") 
        };

            document.querySelector(".wrapper_card").appendChild(element);  
        });
    });
};
}; 

export { KinoDose }