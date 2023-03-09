import icon from "../../assets/icon-search.svg"
import "./main.css"
import { conectar } from "../../functions/api-connect"
import thumb from "../../assets/thumbnails/the-great-lands/regular/small.jpg"
import bookempy from "../../assets/icon-bookmark-empty.svg"

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
                <li>
                   <div className="thumb-container">
                        <img src={thumb} alt="" /> <img src={bookempy} alt="bookmarked" />
                   </div> 
                </li>
                
            </ul>
        </main>

    )


}