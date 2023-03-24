//função que adicionará os filmes nos comentários

import {movieList, trendingList} from "../components/movies-container/movies-list";
import { moviesInformation } from "../interfaces/movies-information";
import { conectar } from "./api-connect"; //função que conecta e retorna uma lista da api
import iconMovie from "../assets/icon-category-movie.svg"

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
    htmlElement.innerHTML= ""; //primeiro limpo o que tem dentro do html
    console.log(objFiltrado)
    let slideNumber: number = 0; //variável utilizada para numerar os filmes no slide
    
    objFiltrado.forEach((obj: moviesInformation) => {
        console.log(obj)
        let thumbnail;
        const year = obj.year;
        const category = obj.category;
        const rating = obj.rating;
        const title = obj.title;

        if(dataset == 'trending') {
            slideNumber = slideNumber + 1;
            console.log(slideNumber) 
            thumbnail = obj.thumbnail.regular.large
            htmlElement.innerHTML = htmlElement.innerHTML + trendingList(slideNumber ,thumbnail, year, category, rating, title, iconMovie);
        }
        else {
            thumbnail = obj.thumbnail.regular.small
            htmlElement.innerHTML = htmlElement.innerHTML + movieList(thumbnail, year, category, rating, title);
        } //capturo link da thumb para enviar a função movieList
        
        
    });
}

