export async function conectar() {
    const resposta = await fetch('http://localhost:3333/movies'); //conecto a api e a resposta eu atribuo a const resposta
    console.log(resposta);
    const respostaConvertida = await resposta.json(); //converto a resposta em string em um objeto json
    console.log(respostaConvertida);
}

console.log('ok')
conectar()

//criar um generics para o retorno da api