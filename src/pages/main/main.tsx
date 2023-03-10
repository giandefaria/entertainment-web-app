import icon from "../../assets/icon-search.svg"
import "./main.css"
import { conectar } from "../../functions/api-connect"
import thumb from "../../assets/thumbnails/the-great-lands/regular/small.jpg"
import bookempy from "../../assets/icon-bookmark-empty.svg"
import iconMovie from "../../assets/icon-category-movie.svg"

export default function Main () {

    conectar()

    return (
        <main>
            <div className="input-container">
                <img src={icon} alt="icon-search" /><input type="text" placeholder="Search for movies or TV series" className="search-input"/>
            </div>

            <h1>Trending</h1>
            <ul data-trending-container>

            </ul>

            <h1>Recommended for you</h1>
            <ul data-recommended-container>
                <li className="movies-container">
                   <div className="thumb-container">
                        <img src={thumb} alt="thumb" /> <img src={bookempy} alt="bookmarked-icon" className="bookmarked-icon" />
                   </div>

                   <div className="category">
                     <h6>2019</h6> <div className="list-style display-center"><img src={iconMovie} alt="icon-movie" /> <h6> Movie</h6></div> <h6 className="list-style">PG</h6>
                   </div>
                   <h4>The Great Lands</h4> 
                </li>
                
            </ul>
        </main>

    )


}