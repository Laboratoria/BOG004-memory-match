// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';

let data = pokemon;
console.log(pokemon)
//Generate Board 
const generateBoard = () =>{
  const items= document.createElement('section');
  items.contains = []
  let cards = []
     for(let j = 0; j < 2; j ++ ){
      for(let i = 0; i < 9; i ++){
      
        cards.push(`
        <div id='container-card' class='container-card'>
          <div class= 'back'>
            <img src="${data.items[i].image}" alt="pokemon-${i}"/>
          </div>
          <div class='front'>
            <img src="../images/back.jpg" alt="front"/>
          </div>
          
        </div>
      `)
           
      console.log(data.items[i].image)
      console.log(data.items[i].id)
    }
    data.items.sort(() =>Math.random()-0.5)
    items.innerHTML = cards.join("")
  }
  return items
}
  generateBoard();
  export {generateBoard}


  