"use strict";

class KinoDose {

    async pageLoading(url) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': '58e91374-c861-46b6-af80-5beabf6d50d2',
                'Content-Type': 'application/json',
            },
        });

        const jsonResponse = await response.json(); 

        const filmItems = await jsonResponse.items; 


         await filmItems.forEach((el)=>{

            
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
}
}

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
                
                document.querySelector(".pagination_btn--bacgraund").classList.remove("pagination_btn--bacgraund") 
                
                document.querySelector(".wrapper_card").innerHTML = ``
                const elementValue = event.target.innerHTML

                if (elementValue == elementValue) {
                   element.classList.add("pagination_btn--bacgraund")
                }

                const getResponse = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${elementValue}`, {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': '58e91374-c861-46b6-af80-5beabf6d50d2',
                        'Content-Type': 'application/json',
                    },
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

const kinoDose = new KinoDose(); 
const kinoDosePaginatin = new Pagination ();

kinoDose.pageLoading('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1');
kinoDosePaginatin.PaginationList()

