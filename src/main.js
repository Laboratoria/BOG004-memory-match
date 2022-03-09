//leer sobre import y export de objetos
import App from "./components/App.js";

import ghibli from "./data/ghibli/ghibli.js";
// lo guardamos en una funcion
let dataTarjetas = ghibli.items
dataTarjetas = dataTarjetas.concat(dataTarjetas);
console.log("Data", dataTarjetas);

document.getElementById('contenedor-cards').style.display = 'none';
document.getElementById('felicitaciones').style.display = 'none';

document.getElementById('iniciar juego').addEventListener('click',iniciarJuego)
function iniciarJuego() {
    document.getElementById('contenedor-cards').style.display = 'grid';
    document.getElementById('contenedor-bienvenida').style.display = 'none';
    document.getElementById('felicitaciones').style.display = 'none';
  }

  function volverAJugar(){
    document.getElementById('felicitaciones').style.display = 'block';
    document.getElementById('contenedor-bienvenida').style.display = 'none';
    document.getElementById('contenedor-cards').style.display = 'none';
    document.getElementById('volverAJugar').addEventListener('click',volverAJugar);
    // document.getElementById('contenedor-bienvenida').style.display = 'block';
  }


App(dataTarjetas);

export default {dataTarjetas, volverAJugar};
