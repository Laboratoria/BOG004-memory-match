export const App = (dataPokemon) => {
  
//console.log("Nice job") 

const traerCartasTodas = (itemCartas) =>{ 
  const traerData = document.createElement('div');
  traerData.className = 'TableroApp';
 const contenido =  `<img scr="${itemCartas.image[i]}">`
  //const contenido = `<p>${itemCartas.id [i]}</p>`
  console.log(contenido)
  traerData.innerHTML = contenido
  //traerData.textContent = 'Hola mundo!';
  const contenedor = document.getElementById ("contenedorCartas") .appendChild(traerCartasTodas);
  console.log('ver la data del argumento que llega al parametro: ',dataPokemon);
  return traerData;
}
// export{App};
console.log("Nice job") 

const App = () => {
dataPokemon.items.forEach((itemCartas) => {
traerCartasTodas(itemCartas);
console.log("dataPokemon.items")

})
}
}

/*function visualizarCartas() {
var conseguirCartas = document.getElementById ("contenedorCartas").innerHTML;
document.getElementById ("cartasEnPantalla").innerHTML = "Aquí estan las cartas" + conseguirCartas
return visualizarCartas; */


//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

/* const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el;
}; */

/* export default App; */

