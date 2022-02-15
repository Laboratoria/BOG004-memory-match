// import App from './components/App.js';
 // const section = document.querySelector('section');  

 // const play = document.getElementById('play-button');

  
  
// document.getElementById("container").style.display = "none";
// document.getElementById("screen-two").style.display = "block";
// document.getElementById("screen-three").style.display = "block";

playButton.addEventListener('click', playGame)

function playGame() {
  let screen1 = document.getElementById('screen-one');
  let screen2 = document.getElementById('screen-two');
  let screen3 = document.getElementById('screen-three');
  
  if(screen1.style.display == 'block'){
    screen1.style.display = 'none';
    screen2.style.display = 'block'
  }
 
}

 
 //document.getElementById('root').appendChild(App());