 import {App} from './components/App.js'
 import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);


const dataPokemon = pokemon.items
App(dataPokemon);
//console.log('ver app ', App(dataPokemon));


document.getElementById('pag2').style.display = 'none';
const botonJugar = document.getElementById('botonInicial')
botonJugar.addEventListener('click', () => {
    /*console.log("Hice click")*/
    document.getElementById('pag1').style.display = 'none';
    document.getElementById('pag2').style.display = 'block';
})

App()