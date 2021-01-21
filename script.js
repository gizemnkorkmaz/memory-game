//button stuff
const buttons = document.querySelectorAll('.btn');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
let buttonClicked = false;
//card stuff
const cards = document.querySelectorAll('.card-container');
const flips = document.querySelector('#flips');
let flipsCount = 0;
let previousCard = null;
//time stuff
let timer = document.querySelector('#time-remain');
let timeStarts = 0;


//game play stuff
function playSound(audio) {
    audio.play();  
}

function clicked(event){
    if(buttonClicked === false){
        window.alert(`Well... Maybe you should have clicked 'start' to start? Maybe? Just sayin' 🤓`);
    } else {
    const audio = event.currentTarget.querySelector('audio');
    const currentCard = event.currentTarget.dataset.cardnumber;
    playSound(audio);
    if(previousCard === null){
        previousCard = currentCard;
    } else if(previousCard === currentCard){
        previousCard = null;
        const matchedCards = document.querySelectorAll(`[data-cardNumber="${currentCard}"]`);
        matchedCards.forEach(card => card.classList.add('matched'));
    } else{
        previousCard = null;
    }
        flips.innerHTML = ++flipsCount;
         
    }
    
}
//button function stuff
function countTime(){
    buttonClicked = true;
    setInterval(function() {
        timer.innerHTML = ++timeStarts;
    }, 1000);    
}

function resetGame(){
    location.reload()
}

//event listener stuff
cards.forEach(card => card.addEventListener('click', clicked, false));
start.addEventListener('click', countTime);
reset.addEventListener('click', resetGame);

