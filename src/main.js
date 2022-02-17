import  { generateBoard } from './components/App.js';

const play= document.getElementById('play');
const mainContainer= document.getElementById('main-container').style.display= 'block';
const screenTwo = document.getElementById('screen-two').style.display= 'none';

  play.addEventListener('click', ()=>{
     mainContainer.document.getElementById('container').style.display= 'none';
     screenTwo.document.getElementById('screen-two').style.display= 'block';


 
});
document.getElementById('screen-two').appendChild(generateBoard())