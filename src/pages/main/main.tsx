import icon from "../../assets/icon-search.svg"
import "./main.css"
import { conectar } from "../../functions/api-connect"
import thumb from "../../assets/thumbnails/the-great-lands/regular/small.jpg"
import bookempy from "../../assets/icon-bookmark-empty.svg"
import iconMovie from "../../assets/icon-category-movie.svg"
import MovieList from "../../components/movies-container/movies-list"
import { useEffect } from "react"
import addMovies from "../../functions/add-movies"

export default function Main () {

    useEffect(() => {
        let ulContainers : NodeListOf<HTMLElement> = document.querySelectorAll('[data-ul]');
        //console.log(ulContainers);
        addMovies(ulContainers);


    }, [])

    return (
        <main>
            <div className="input-container">
                <img src={icon} alt="icon-search" /><input type="text" placeholder="Search for movies or TV series" className="search-input"/>
            </div>

            <h1>Trending</h1>
            <ul data-trending-container data-ul="trending">

            </ul>

            <h1>Recommended for you</h1>
            <ul data-recommended-container data-ul="notTreding">
                
            {/*    <li className="movies-container">
                   <div className="thumb-container">
                        <img src={thumb} alt="thumb" /> <div className="bookmarked-icon"><img src={bookempy} alt="bookmarked-icon"/></div>
                   </div>

                   <div className="category">
                     <h6>2019</h6> <div className="list-style display-center"><img src={iconMovie} alt="icon-movie" /> <h6> Movie</h6></div> <h6 className="list-style">PG</h6>
                   </div>
                   <h4>The Great Lands</h4> 
                </li>
            */}    
            </ul>
        </main>

    )


}