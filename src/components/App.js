/*const crearCard = (itemPelicula) => {
  const card = document.createElement('div');
  card.className = "card"
  const contenido = `<img src="${itemPelicula.image}">`
  card.innerHTML = contenido;
  const contenedor = document.getElementById("contenedor-cards").appendChild(card)


};*/
//llamar la funcion para que funcione
// import dataTarjetas";
/*const randomize = () => {
  const data = dataTarjetas ();
  data.sort(() => Math.random ());
  console.log(data);
  
}; */
import ghibli from '../data/ghibli/ghibli.js';


const App = (data) => {
  for (let i = 1; i <= 2; i++) {
    data.forEach((elemento) => {
      const card = document.createElement("div");
      card.className = "card";
      const contenido = `<img src="${elemento.image}">`;
      card.innerHTML = contenido;
      document.getElementById("contenedor-cards").appendChild(card);
    });
  }

  //crear una variable global para guardar y poder
const card = elemento.image;
    const mix = [card.items];
    console.log(mix)
    for(let i = mix.length - 1; i > 0; i--){
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const copia = mix[i];
      mix[i] = mix[randomIndex]
      mix[randomIndex] = copia
    }
    console.log(mix)
    return card
  };




// const frutas = ['🍍','🍎','🍊','🍎','🍊','🍎','🍊','🍋','🍓','🍒','🍍'];
// for(let i = frutas.length - 1; i > 0; i--){

// }
// console.log(frutas)

/*const mix = [ghibli];
for(let i = ghibli.length - 1; i > 0; i--){
  const randomIndex = Math.floor(Math.random() * (i + 1));
  const copia = ghibli[i];
  ghibli[i] = ghibli[randomIndex]
  ghibli[randomIndex] = copia
}

console.log(ghibli)*/


export default App;