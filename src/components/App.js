//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
let data = pokemon;
console.log(data);

function aleatorizar(items) {
  let indexActual = items.length, valorTemporal, indexAleatorio;
  while (0 !== indexActual) {
    indexAleatorio = Math.floor(Math.random() * indexActual);
     indexActual -= 1;
     valorTemporal = items[indexActual];
     items[indexActual] = items[indexAleatorio];
     items[indexAleatorio] = valorTemporal;

   } 
   return items; 
 }


 aleatorizar(data);

/*
  const App = () => {
      const informacionTarjeta = aleatorizar();
      //Generar HTML
      informacionTarjeta.forEach(() =>{
    const tarjeta = document.createElement('section');
    const cara = document.createElement('image');
    const sello = document.createElement('section');
    //acceder a la lista de clases de un elemento 
    tarjeta.classList = "tarjeta";
    cara.classList = "cara";
    sello.classList = "sello";
  //adjuntar cartas en las secciones 
  
  });
  };
  */

  //una funciôn para generar un aleatorio
  // Colocar elementos en distintas posiciones de un array
/*
  const aleatorizar = () => {
    const tarjetaData = data;
    tarjetaData.Math.floor(Math.random() * 0.5);
    console.log(tarjetaData);
  };

  aleatorizar();
  
  */







// export default App;
