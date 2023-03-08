export async function conectar() {
    const resposta = await fetch('http://localhost:3333/movies');
    console.log(resposta);
    const respostaConvertida = await resposta.json();
    console.log(respostaConvertida);
}

console.log('ok')
conectar()