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
          <div class="memory-game">
          <div class="card" data-pokemon="${data.items[i].id}">
          <div class="face">
          <img src="${data.items[i].image}" id=""  alt="Pokémon">
          </div>
          <div class="back">
          <svg width="173" height="126" viewBox="0 0 173 126" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="124.625" height="171.935" rx="18.9262" transform="matrix(-0.000796218 -1 1 -0.000810979 0.0992279 125.689)" fill="#143A3F"/>
          <ellipse cx="85.9227" cy="62.9777" rx="39.4141" ry="39.7778" fill="white"/>
          </svg>


                </div>
              </div>
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


  