//função que adicionará os filmes nos comentários

import { conectar } from "./api-connect"; //função que conecta e retorna uma lista da api

export default async function addMovies (elements: NodeListOf<HTMLElement>) {
    const obj = await conectar(); //atribuo o retorno ao obj
    console.log(obj);

    elements.forEach( (htmlElement: HTMLElement) =>  {
        console.log(htmlElement.dataset.ul);
    } )

}