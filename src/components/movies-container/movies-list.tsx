//componente que cria o container do filme

import thumb from "../../assets/thumbnails/the-great-lands/regular/small.jpg"
import bookempy from "../../assets/icon-bookmark-empty.svg"
import iconMovie from "../../assets/icon-category-movie.svg"

export default function MovieList () {

    return (
        <li className="movies-container">
            <div className="thumb-container">
                <img src={thumb} alt="thumb" /> <div className="bookmarked-icon"><img src={bookempy} alt="bookmarked-icon"/></div>
            </div>

            <div className="category">
            <h6>2019</h6> <div className="list-style display-center"><img src={iconMovie} alt="icon-movie" /> <h6> Movie</h6></div> <h6 className="list-style">PG</h6>
            </div>
            <h4>The Great Lands</h4> 
        </li>


    )


}