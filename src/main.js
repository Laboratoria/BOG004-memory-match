 import App from '../scr/components/App.js';

App();

 /*import App from './src\components\App.js'; */

document.getElementById('pag2').style.display = 'none';
const botonJugar = document.getElementById('botonInicial')
botonJugar.addEventListener('click', () => {
    /*console.log("Hice click")*/
    document.getElementById('pag1').style.display = 'none';
    document.getElementById('pag2').style.display = 'block';
})

