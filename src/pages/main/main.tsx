import icon from "../../assets/icon-search.svg"
import "./main.css"
import { useEffect, useState } from "react"
import addMovies from "../../functions/add-movies"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { buscaVideo } from "../../functions/api-connect"

export default function Main() {

  const [option, setOptions] = useState({}) //crio um useState para monitorar 
  const [sliderRef, slider] = useKeenSlider(option)
  /*const [sliderRef, slider] = useKeenSlider<any>({
    loop: true,
    mode: "free",
    slides: { origin: "auto", perView: 2.8, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  })*/

  useEffect(() => {
    let searchInput: HTMLInputElement | any = document.querySelector('.search-input'); //capturo o input
    searchInput?.addEventListener('keyup', (evento:any) => {
      console.log(searchInput.value.length);
      if(searchInput.value.length != 0){  
        buscaVideo(evento, searchInput.value);
      } else {
        console.log("input vazio"); //aqui manipularei o display da página, se tiver vazio, será block, do contrário, none;
        const searchContainer = document.querySelector('.search-container') as HTMLElement;
        searchContainer.innerHTML = "";
      }
    }); //adiciono eventlistener
    console.log(searchInput);

    let ulContainers: NodeListOf<HTMLElement> = document.querySelectorAll('[data-ul]'); //seleciono todos os elementos ul
    addMovies(ulContainers); //função que adiciona cada container de filme no html. Envio nodeList dos elementos ul
    

    setTimeout(() => {
      //adiciono as propriedades do slide só após a lista de fillmes 'trending' for criada, para evitar bug
      setOptions({
        loop: true,
        mode: "free",
        slides: { origin: "auto", perView: 2.85, spacing: 10 },
        range: {
          min: -5,
          max: 5,
        }
      })
    }, 600)

  }, [])



  return (
    <main>
     
      <div className="input-container">
        <img src={icon} alt="icon-search" /><input type="text" placeholder="Search for movies or TV series" className="search-input" />
      </div>

      <section className="search-container" style={{display: "none"}}>
        <h1>Funcionando!</h1>
        <ul data-result-container className="recommended">

        </ul>

      </section>  

      <section className="main-container" style={{display: "block"}}>
        <h1>Trending</h1>
        <ul ref={sliderRef} data-trending-container data-ul="trending" className="keen-slider">

        </ul>

        <h1>Recommended for you</h1>
        <ul data-recommended-container data-ul="notTreding" className="recommended">

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
      </section>
    </main>

  )


}