//função que realiza a conexão com a api retornando o objeto

import { moviesInformation } from "../interfaces/movies-information";

export async function conectar() {
    const resposta = await fetch('http://localhost:3333/movies'); //conecto a api e a resposta eu atribuo a const resposta
    //console.log(resposta);
    const respostaConvertida = await resposta.json(); //converto a resposta em string em um objeto json
    //console.log(respostaConvertida);

    return respostaConvertida;
}

export async function buscaVideo(evento:any , termoDeBusca: any) {
    evento.preventDefault();
    const resposta = await fetch(`http://localhost:3333/movies?q=${termoDeBusca}`); //conecto a api e busco os vídeos que contenham o termoDeBusca
    //console.log(resposta);
    const respostaConvertida = await resposta.json(); //converto a resposta em string em um objeto json
    console.log(respostaConvertida);

    return respostaConvertida;
}

//criar um generics para o retorno da api