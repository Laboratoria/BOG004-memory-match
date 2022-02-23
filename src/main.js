 import {App} from './components/App.js'
 import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);

/* Este es el proceso donde la data se relaciona */
const dataPokemon = pokemon.items

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

