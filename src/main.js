/* import App from './components/App.js';  */
document.getElementById('pag2').style.display = 'none';
const botonJugar = document.getElementById('botonInicial')
botonJugar.addEventListener('click', () => {
    console.log("Hice click")
    document.getElementById('pag1').style.display = 'none';
    document.getElementById('pag2').style.display = 'block';
})

/* /* function mostrar(){
    document.getElementById('pag1').style.display = 'none'; 
    document.getElementById('pag2').style.display = 'block';
    boton.addEventListener("click", mostrar());
    console.log("Click");
     */
/* } */ 
/* function paginaPrincipal(){
    document.getElementById('pag1').style.display = ("block");
    document.getElementById('pag2').style.display = ("none").value;
    boton.addEventListener("click", paginaPrincipal); 
} */

    
/* document.getElementById('root').appendChild(App()); */