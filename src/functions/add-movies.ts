//função que adicionará os filmes nos comentários

import movieList from "../components/movies-container/movies-list";
import { moviesInformation } from "../interfaces/movies-information";
import { conectar } from "./api-connect"; //função que conecta e retorna uma lista da api

export default async function addMovies (elements: NodeListOf<HTMLElement>) {
    const obj = await conectar(); //atribuo o retorno ao obj
    console.log(obj);

    elements.forEach( (htmlElement: HTMLElement) =>  {
        console.log(htmlElement.dataset.ul);

        if (htmlElement.dataset.ul == 'notTreding') {
            notTrendingMovie(obj, htmlElement);                      
        }

    })

}

//função que filtra os itens do objeto em que o trending seja falso
function notTrendingMovie(obj: any, htmlElement: HTMLElement) {
    const objFiltrado = obj.filter((movie: any) => {
        return movie.isTrending == false;
        
    });

    addMovieListInHtml(objFiltrado, htmlElement);

    //console.log(objFiltrado);
    
}

//função que adiciona a lista no html da página
function addMovieListInHtml(objFiltrado: any, htmlElement: HTMLElement) {
    htmlElement.innerHTML= "";
    
    objFiltrado.forEach((element: moviesInformation) => {
        const thumbnail = ("../." + element.thumbnail.regular.small);
        console.log(thumbnail)
        htmlElement.innerHTML = htmlElement.innerHTML + movieList(thumbnail);
    });
}

