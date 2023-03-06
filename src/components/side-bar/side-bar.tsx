import "./side-bar.css"
import logo from "../../assets/logo.svg"
import home from "../../assets/icon-nav-home.svg"
import movie from "../../assets/icon-nav-movies.svg"
import tvSeries from "../../assets/icon-nav-tv-series.svg"
import bookmark from "../../assets/icon-nav-bookmark.svg"


export default function SideBar () {

    return (
        <aside>
            <section className="side-bar-icons-container">
                <img src={logo} alt="logo" className="side-bar-logo"/>
                <div className="side-bar-icons">
                    <img src={home} alt="home-icon" />
                    <img src={movie} alt="movie-icon" />
                    <img src={tvSeries} alt="tv-series-icon" />
                    <img src={bookmark} alt="bookmark-icon" />

                </div>
            </section>
             
            <h1>Barra Lateral</h1>
        </aside>    
    )

}