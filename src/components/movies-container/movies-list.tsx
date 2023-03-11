//componente que cria o container do filme

import thumb from "../../assets/thumbnails/the-great-lands/regular/small.jpg"
import bookempy from "../../assets/icon-bookmark-empty.svg"
import iconMovie from "../../assets/icon-category-movie.svg"


export default function MovieList () {

    return (`
        <li class="movies-container">
            <div class="thumb-container">
                <img src='${thumb}' alt="thumb" /> <div class="bookmarked-icon"><img src='${bookempy}' alt="bookmarked-icon"/></div>
            </div>

            <div class="category">
            <h6>2019</h6> <div class="list-style display-center"><img src='${iconMovie}' alt="icon-movie" /> <h6> Movie</h6></div> <h6 class="list-style">PG</h6>
            </div>
            <h4>The Great Lands</h4> 
        </li>


    `)


}