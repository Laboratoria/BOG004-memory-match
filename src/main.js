 import {App} from './components/App.js'
 import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);

/* Este es el proceso donde la data se relaciona */
let dataPokemon = pokemon.items
dataPokemon = dataPokemon.concat(dataPokemon)
document.getElementById('pag2').style.display = 'none';
const botonJugar = document.getElementById('botonInicial')
botonJugar.addEventListener('click', () => {
    const contenedor = document.createElement('div');
    dataPokemon.forEach(element => {
        contenedor.appendChild(App(element));
    });
    console.log(contenedor)
    /* Aqui se llama el id del 2ndo div de la pagina 2 para que se muestren las imagenes */
    document.getElementById("contenedorTodas").appendChild(contenedor)
    document.getElementById('pag1').style.display = 'none';
    document.getElementById('pag2').style.display = 'block';
})

function createCards(){
    const cardsContainerElement = document.getElementById("contenedorTodas");
    const cardBaseContainerHTML = '<div class="column card-container"><img class="card" data-pokemon-name"" src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849__480.png"></div>';
    const pokemonsLength = dataPokemon.length;
  
    for (let index = 0; index < pokemonsLength; index++){
      cardsContainerElement.innerHTML += cardBaseContainerHTML 
    }
}



function main() {
  createCards()
}

main()
