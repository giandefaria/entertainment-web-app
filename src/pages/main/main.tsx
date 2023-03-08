import icon from "../../assets/icon-search.svg"
import "./main.css"
import { conectar } from "../../functions/api-connect"

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
                
            </ul>
        </main>

    )


}