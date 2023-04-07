let generar = document.getElementById('generar');
generar.addEventListener('click',()=> frase_aleatoria());

let API = 'https://type.fit/api/quotes';

async function frase_aleatoria(){
    let res = await fetch(API);
    let frases_autor = await res.json();
    let random = ()=> Math.floor(Math.random() * frases_autor.length) +1;
    let numero = random();
    let aleatorio = frases_autor[numero];

    document.getElementById('titulo-n').innerHTML = `ADVICE #${numero}`;
    document.getElementById('text').innerHTML = `"${aleatorio.text}"`;
    document.getElementById('autor').innerHTML = `- ${aleatorio.author}`;
}