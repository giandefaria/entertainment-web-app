//componente que cria o container do filme, a depender da seção que se encontra o filme
import iconMovie from "../../assets/icon-category-movie.svg"


export function trendingList (slideNumber:number,thumbnail:any, year:number, category:string, rating:string, title:string, bookmark:any) {
    
    

    return (`
        <li class="movies-container keen-slider__slide number-slide${slideNumber}">
            <div class="thumb-container">
                <img class="thumb-image-trending" src='${thumbnail}' alt="thumb" /> <div class="bookmarked-icon"><img src='${bookmark}' alt="bookmarked-icon"/></div>
            </div>

            <div class="container--inner--image">
                <div class="category">
                <h6>${year}</h6> <div class="list-style display-center"><img src='${iconMovie}' alt="icon-movie" /> <h6> ${category}</h6></div> <h6 class="list-style">${rating}</h6>
                </div>
                <h4 class="movie-title">${title}</h4>
            </div> 
        </li>


    `)


}

export function movieList (thumbnail:any, year:number, category:string, rating:string, title:string, bookmark:any) {

    

    return (`
        <li class="movies-container">
            <div class="thumb-container">
                <img class="thumb-image" src='${thumbnail}' alt="thumb" /> <div class="bookmarked-icon"><img src='${bookmark}' alt="bookmarked-icon"/></div>
            </div>

            <div class="category">
            <h6>${year}</h6> <div class="list-style display-center"><img src='${iconMovie}' alt="icon-movie" /> <h6> ${category}</h6></div> <h6 class="list-style">${rating}</h6>
            </div>
            <h4 class="movie-title">${title}</h4> 
        </li>


    `)


}

