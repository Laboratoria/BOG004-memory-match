import  { generateBoard } from './components/App.js';
document.getElementById('screen-two').appendChild(generateBoard())
const playButton = document.getElementById('playButton')
playButton.addEventListener('click', playGame);

function playGame() {
  let screen1 = document.getElementById('screen-one');
  let screen2 = document.getElementById('screen-two');
  let screen3 = document.getElementById('screen-three');
  
  if(screen1.style.display == 'block'){
    screen1.style.display = 'none';
    screen2.style.display = 'block'
  }
 
}


// CLick 
var filppedCard = false;
var firstCard, secondCard;
const cards = document.querySelectorAll(".card");
function filpCard() {
    this.classList.add("flip");
    if (!filppedCard) {
        filppedCard = true;
        firstCard = this;
    } else {
        filppedCard = false;
        secondCard = this;
        console.log({ firstCard, secondCard });
        console.log(firstCard.dataset.pokemon);
        console.log(secondCard.dataset.pokemon);

        if (firstCard.dataset.pokemon === secondCard.dataset.pokemon){
            firstCard.removeEventListener('click' , filpCard);
            secondCard.removeEventListener('click' , filpCard);
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500 );
            
        }

    }
}
cards.forEach((card) =>
    card.addEventListener("click", filpCard)
);