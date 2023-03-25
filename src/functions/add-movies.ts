//função que adicionará os filmes nas respectivas seções

import {movieList, trendingList} from "../components/movies-container/movies-list";
import { moviesInformation } from "../interfaces/movies-information";
import { conectar } from "./api-connect"; //função que conecta e retorna uma lista da api
import bookEmpty from "../assets/icon-bookmark-empty.svg"
import bookFull from "../assets/icon-bookmark-full.svg"

export default async function addMovies (NodeElements: NodeListOf<HTMLElement>) {
    const obj = await conectar(); //atribuo o retorno ao obj
    console.log(obj);

    NodeElements.forEach( (htmlElement: HTMLElement) =>  {
        verifyCategoryAndAddListOfMovies(obj, htmlElement);

    })

}

function searchListener(htmlElement:HTMLElement) {
    htmlElement.addEventListener
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
    htmlElement.innerHTML= ""; //primeiro limpo o que tem dentro do html
    console.log(objFiltrado)
    let slideNumber: number = 0; //variável utilizada para numerar os filmes no slide
    
    objFiltrado.forEach((obj: moviesInformation) => {
        let bookmarkIcon = obj.isBookmarked == true ? bookFull : bookEmpty; //se for true, sera icone bookfull, do contrario bookempty
        let thumbnail; //se for da seção trending, será um thumbnail maior
        const year = obj.year;
        const category = obj.category;
        const rating = obj.rating;
        const title = obj.title;

        //se o elemento for a seção trending
        if(dataset == 'trending') {
            slideNumber = slideNumber + 1;
            thumbnail = obj.thumbnail.regular.large
            htmlElement.innerHTML = htmlElement.innerHTML + trendingList(slideNumber ,thumbnail, year, category, rating, title, bookmarkIcon);
        }
        else {
            thumbnail = obj.thumbnail.regular.small
            htmlElement.innerHTML = htmlElement.innerHTML + movieList(thumbnail, year, category, rating, title, bookmarkIcon);
        } //capturo link da thumb para enviar a função movieList
        
        
    });
}

