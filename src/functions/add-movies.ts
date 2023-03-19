//função que adicionará os filmes nos comentários

import {movieList} from "../components/movies-container/movies-list";
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

//filmes que estão entre os trending
function tredingMoviesList(htmlElement: HTMLElement, obj: any) {
    if (htmlElement.dataset.ul == 'trending') { //filmes que estão entre os trending
        const objFiltrado = obj.filter((movie: any) => { return movie.isTrending == true; });
        addMovieListInHtml(objFiltrado, htmlElement, htmlElement.dataset.ul);
    }
}

//filmes que não estao entre os trending
function notTredingMoviesList(htmlElement: HTMLElement, obj: any) {
    if (htmlElement.dataset.ul == 'notTreding') { 
        const objFiltrado = obj.filter((movie: any) => { return movie.isTrending == false; });
        addMovieListInHtml(objFiltrado, htmlElement, htmlElement.dataset.ul);
    }
}


//função que adiciona a lista no html da página
function addMovieListInHtml(objFiltrado: any, htmlElement: HTMLElement, dataset:any) {
    htmlElement.innerHTML= "";
    console.log(objFiltrado)
    
    objFiltrado.forEach((obj: moviesInformation) => {
        let thumbnail;

        if(dataset == 'trending') { thumbnail = obj.thumbnail.regular.medium}
        else {thumbnail = obj.thumbnail.regular.small} //capturo link da thumb para enviar a função movieList
        
        const year = obj.year;
        const category = obj.category;
        const rating = obj.rating;
        const title = obj.title;

        htmlElement.innerHTML = htmlElement.innerHTML + movieList(thumbnail, year, category, rating, title);

    });
}

