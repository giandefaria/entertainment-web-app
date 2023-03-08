import icon from "../../assets/icon-search.svg"
import "./main.css"

export default function Main () {


    return (
        <main>
            <div className="input-container">
                <img src={icon} alt="icon-search" /><input type="text" placeholder="Search for movies or TV series" className="search-input"/>
            </div>

            <h1>Trending</h1>
            <div data-trending>

            </div>

            <div>
                
            </div>
        </main>

    )


}