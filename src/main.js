import App from "./components/App.js";

import ghibli from "./data/ghibli/ghibli.js";
// lo guardamos en una funcion
let dataTarjetas = ghibli.items
dataTarjetas = dataTarjetas.concat(dataTarjetas);
console.log("Data", dataTarjetas);

document.getElementById('contenedor-cards').style.display = 'none';
function iniciarJuego() {
    document.getElementById('contenedor-cards').style.display = 'grid';
    document.getElementById('contenedor-bienvenida').style.display = 'none';

  }
  document.getElementById('iniciar juego').addEventListener('click',iniciarJuego)

  function reiniciar(){
    // document.getElementById('contenedor-cards').style.display = 'none';
    // document.getElementById('contenedor-bienvenida').style.display = 'none';
    document.getElementById('felicitaciones').style.display = 'flexbox';
  }
  document.getElementById('felicitaciones').addEventListener('click',felicitaciones) //como hacer que el escuchador se active cuando todas las cartas hagan match

App(dataTarjetas);

export default dataTarjetas;
