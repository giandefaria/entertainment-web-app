import { moviesInformation } from "../interfaces/movies-information";

export async function conectar() {
    const resposta = await fetch('http://localhost:3333/movies'); //conecto a api e a resposta eu atribuo a const resposta
    console.log(resposta);
    const respostaConvertida = await resposta.json(); //converto a resposta em string em um objeto json
    console.log(respostaConvertida);
    respostaConvertida.forEach( (e : moviesInformation) => {
        if (e.isTrending) {
            console.log(e)
        }
    })
}



//criar um generics para o retorno da api