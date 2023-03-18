//componente que cria o container do filme
import bookempy from "../../assets/icon-bookmark-empty.svg"
import iconMovie from "../../assets/icon-category-movie.svg"


export default function movieList (thumbnail:any, year:number, category:string, rating:string, title:string) {

    

    return (`
        <li class="movies-container">
            <div class="thumb-container">
                <img class="thumb-image" src='${thumbnail}' alt="thumb" /> <div class="bookmarked-icon"><img src='${bookempy}' alt="bookmarked-icon"/></div>
            </div>

            <div class="category">
            <h6>${year}</h6> <div class="list-style display-center"><img src='${iconMovie}' alt="icon-movie" /> <h6> ${category}</h6></div> <h6 class="list-style">PG</h6>
            </div>
            <h4>The Great Lands</h4> 
        </li>


    `)


}