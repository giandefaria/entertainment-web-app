//função que adicionará os filmes nos comentários

import MovieList from "../components/movies-container/movies-list";
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

function notTrendingMovie(obj: any, htmlElement: HTMLElement) {
    const objFiltrado = obj.filter((movie: any) => {
        return movie.isTrending == false;
        
    });

    addMovieListInHtml(objFiltrado, htmlElement);

    console.log(objFiltrado);
    
}

//função que adiciona a lista no html da página
function addMovieListInHtml(objFiltrado: any, htmlElement: HTMLElement) {
    htmlElement.innerHTML= "";
    objFiltrado.forEach((element: any) => {
        htmlElement.innerHTML = htmlElement.innerHTML + MovieList();
    });
}

