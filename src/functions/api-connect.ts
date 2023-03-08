export async function conectar() {
    const resposta = await fetch('http://localhost:3333/movies');
    console.log(resposta);
}

console.log('ok')
conectar()