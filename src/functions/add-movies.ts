//função que adicionará os filmes nos comentários

import MovieList from "../components/movies-container/movies-list";
import { conectar } from "./api-connect"; //função que conecta e retorna uma lista da api

export default async function addMovies (elements: NodeListOf<HTMLElement>) {
    const obj = await conectar(); //atribuo o retorno ao obj
    console.log(obj);

    elements.forEach( (htmlElement: HTMLElement) =>  {
        console.log(htmlElement.dataset.ul);

        if (htmlElement.dataset.ul == 'notTreding') {
            htmlElement.innerHTML= ""
            notTrendingMovie(obj, htmlElement);
            
                        
        }

    } )

}

function notTrendingMovie(obj: any, htmlElement: HTMLElement) {
    const objFiltrado = obj.filter((movie: any) => {
        return movie.isTrending == false;
        
    });

    objFiltrado.forEach((element: any) => {
        htmlElement.innerHTML = htmlElement.innerHTML + MovieList();
    })

    console.log(objFiltrado);
    //console.log(htmlElement)
    //const lista = return MovieList();
    //console.log(JSON.stringify(lista))
    //htmlElement.appendChild(lista)
    
}
