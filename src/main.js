import { App } from "./components/App.js";
import pokemon from "../data/pokemon/pokemon.js";
console.log(pokemon);

/* Duplicar las cartas */
let dataPokemon = pokemon.items;
dataPokemon = dataPokemon.concat(dataPokemon);

//Proceso de ver las cartas aleatoriamente
const mezclar = () => {
  const tarjetas = dataPokemon;
  tarjetas.sort(() => Math.random() - 0.5);
};
mezclar();

/*Creación de la página 2 y botón que mueve de una página a otra*/
document.getElementById("pag2").style.display = "none";
const botonJugar = document.getElementById("botonInicial");
botonJugar.addEventListener("click", () => {
  const contenedor = document.createElement("div");
  contenedor.className = "frontales";
  dataPokemon.forEach((element) => {
    /* contenedor.appendChild(App(element)); */
    /*Trae los elementos de data pokémon y sus caracteristicas*/
  });
  console.log(contenedor);
  /* Aqui se llama el id del 2ndo div de la pagina 2 para que se muestren las imagenes */
  document.getElementById("contenedorTodas").appendChild(contenedor);
  document.getElementById("pag1").style.display = "none";
  document.getElementById("pag2").style.display = "block";
});

let arrayParaCompararId = new Array();
function compararId(idDeComparar) {
  if (arrayParaCompararId.length < 2) {
    arrayParaCompararId.push(idDeComparar);
    if (arrayParaCompararId[0] && arrayParaCompararId[1]) {
      if (arrayParaCompararId[0] === arrayParaCompararId[1]) {     
        return console.log(true);
      } else {
        //arrayParaCompararId[0].classList.toggle("backhidden")
        //arrayParaCompararId[1].classList.toggle("backhidden")

       //setTimeout(function(){
          //arrayParaCompararId.classList.toggle("oculto");
          //arrayParaCompararId.classList.toggle("oculto");
          //console.log("ESTE ES TIEMPO");
      //}, 1000);

      //function retrocederLasCartas (){
        //arrayParaCompararId.classList.toggle("oculto");
        //console.log("hola");
      //}
      //setTimeout(retrocederLasCartas, 500);

        //const prueba = document.querySelectorAll('[data-name="'+arrayParaCompararId[0]+'"]');
        //prueba.classList.toggle("oculto", arrayParaCompararId.length == 2 )
        //console.log(prueba);
        //arrayParaCompararId.classList.toggle("visible", arrayParaCompararId.length == 2 )
        return console.log(false);
      }
    }
  }
  else if ( arrayParaCompararId.length === 2){
    arrayParaCompararId = [];
    arrayParaCompararId.push(idDeComparar);
  }
}
/*Se crean las imagenes de la cara posterior y se multiplican*/
function createCards() {
  const cardsContainerElement = document.getElementById("contenedorTodas");

  for (let i = 0; i < dataPokemon.length; i++) {
    const cardBaseContainerHTML = document.createElement("div");
    cardBaseContainerHTML.setAttribute("class", "column card-container");
    const imagePokemon = `<img class="card" data-name="${dataPokemon[i].id}" src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849__480.png" id="${i}">
                          <img src="${dataPokemon[i].image}" id="${i}" class="pokemon oculto">`;

    cardBaseContainerHTML.innerHTML = imagePokemon;
    cardBaseContainerHTML.addEventListener("click", (e) => {
      const idPokemonSeleccionado = parseInt(e.target.id);
      const imagenesPokebolas = document.getElementsByClassName("card");
      const imagenesData = document.getElementsByClassName("pokemon");
      console.log(idPokemonSeleccionado);
      //console.log(e.target.dataset.name);
      imagenesPokebolas[idPokemonSeleccionado].classList.toggle("oculto");
      imagenesData[idPokemonSeleccionado].classList.toggle("oculto");
      compararId(dataPokemon[i].id);
    });
    cardsContainerElement.appendChild(cardBaseContainerHTML);
  }
}

createCards();

