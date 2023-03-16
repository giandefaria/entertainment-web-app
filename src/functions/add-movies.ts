//função que adicionará os filmes nos comentários

import movieList from "../components/movies-container/movies-list";
import { moviesInformation } from "../interfaces/movies-information";
import { conectar } from "./api-connect"; //função que conecta e retorna uma lista da api

export default async function addMovies (NodeElements: NodeListOf<HTMLElement>) {
    const obj = await conectar(); //atribuo o retorno ao obj
    console.log(obj);

    NodeElements.forEach( (htmlElement: HTMLElement) =>  {
        verifyCategoryAndAddListOfMovies(obj, htmlElement);

    })

}

//função que verificará a nodeList e adicionará o respectivo filme
function verifyCategoryAndAddListOfMovies(obj: any, htmlElement: HTMLElement) {
    console.log(htmlElement.dataset.ul); //retorna se é trending ou not trending
 
    tredingMoviesList(htmlElement, obj);
    notTredingMoviesList(htmlElement, obj);
    
    //console.log(objFiltrado);
    
}

function notTredingMoviesList(htmlElement: HTMLElement, obj: any) {
    if (htmlElement.dataset.ul == 'notTreding') { //filmes que não estao entre os trending
        const objFiltrado = obj.filter((movie: any) => {
            return movie.isTrending == false;

        });
        console.log(objFiltrado);
        addMovieListInHtml(objFiltrado, htmlElement);
    }
}

function tredingMoviesList(htmlElement: HTMLElement, obj: any) {
    if (htmlElement.dataset.ul == 'trending') { //filmes que estão entre os trending
        const objFiltrado = obj.filter((movie: any) => {
            return movie.isTrending == true;

        });
        console.log(objFiltrado);
        addMovieListInHtml(objFiltrado, htmlElement);
    }
}

//função que adiciona a lista no html da página
function addMovieListInHtml(objFiltrado: any, htmlElement: HTMLElement) {
    htmlElement.innerHTML= "";
    
    objFiltrado.forEach((element: moviesInformation) => {
        const thumbnail = (element.thumbnail.regular.small);
        console.log(thumbnail)
        htmlElement.innerHTML = htmlElement.innerHTML + movieList(thumbnail);
    });
}

