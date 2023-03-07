import icon from "../../assets/icon-search.svg"

export default function Main () {


    return (
        <main>
            <div className="input-container">
                <img src={icon} alt="icon-search" /><input type="text" placeholder="Search for movies or TV series" className="search-input"/>
            </div>
            <div>
                <h1>página principal</h1>
            </div>
        </main>

    )


}