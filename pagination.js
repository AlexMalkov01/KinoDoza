"use strict"
import { GET_FILM_LIST , API_HEADERS , GET_VIDEO } from "./index.js"

class Pagination {
    paginationLength = [0,1,2,3,4]

    PaginationList () {

        this.paginationLength.forEach((el,idx)=>{
            
            const element = document.createElement("button")
            element.classList.add("pagination_btn")
            element.innerHTML = `${idx + 1}`
            if (idx === 0) {
                element.classList.add("pagination_btn--bacgraund")
            }
            element.addEventListener("click", async (event)=>{

                scrollToTop() 
                
                document.querySelector(".pagination_btn--bacgraund").classList.remove("pagination_btn--bacgraund") 
                
                document.querySelector(".wrapper_card").innerHTML = ``

                const elementValue = event.target.innerHTML

                if (elementValue == elementValue) {
                   element.classList.add("pagination_btn--bacgraund")
                }


                const getResponse = await fetch(`${GET_FILM_LIST}${elementValue}`, {
                    headers: API_HEADERS
                });
                const jsonResponse = await getResponse.json()
                const filmsItems = await jsonResponse.items

                filmsItems.forEach((el)=>{
                    const element = document.createElement("div")
                    element.classList.add("card")
        
        
                    if (el.ratingKinopoisk == null) {
                        element.innerHTML = `
                        <img src="${el.posterUrlPreview}" alt="" class="img_card">
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
               <img src="${el.posterUrlPreview}" alt="" class="img_card">
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
                })
            })
            document.querySelector(".pagination_wrapper").appendChild(element)
        })
    }
}

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
}

export {Pagination}