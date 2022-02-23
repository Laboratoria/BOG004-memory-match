export const App = (itemCartas) => {
  
const traerData = document.createElement('div')
  traerData.className = 'TableroApp';
  const contenido = `<img src="${itemCartas.image}">`
  traerData.innerHTML = contenido
  console.log('ver la data del argumento que llega al parametro: ',traerData);
  return traerData
}
