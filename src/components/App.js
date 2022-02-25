export const App = (itemCartas) => {
  
  const traerData = document.createElement('div')
  traerData.className = 'TableroApp';
  const contenido = `<img src="${itemCartas.image}" id="data" alt="Pokemon's">` 
  traerData.innerHTML = contenido
  console.log('ver la data del argumento que llega al parametro: ',traerData);
  return traerData 
}
  
  


  /* function myFunction() {
      const node = document.getElementById("data");
      const clone = node.cloneNode(true);
      document.getElementById("contenedorTodas").appendChild(clone);
  }
} */
  
  /* function main() {
    createPokemonsCards()
  
  }
  
  main()  */







  







/* let cartas = [] 
  for(let i = 0; i < 2; i++) {
    for(let a = 0; a < 9; a++) {
      console.log("cartas", cartas)
    }
  }  */

