// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

/*
Variables
*/

//list of pictures used in game
const pictures = [
"fa-diamond",
"fa-paper-plane-o",
"fa-anchor",
"fa-bolt",
"fa-cube",
"fa-anchor",
"fa-leaf",
"fa-bicycle",
"fa-diamond",
"fa-bomb",
"fa-leaf",
"fa-bomb",
"fa-bolt",
"fa-bicycle",
"fa-paper-plane-o",
"fa-cube"
]

//shuffled cards
let shufledCards = [];

// deck of all cards in game
const deck = document.querySelector(".deck");

//cards
let cards = [];
let openedCards = [];
let matchedCards = [];

//moves of player
let move = 0;
const moves = document.querySelector(".moves");

// quallity mesure 
let stars = [];
stars = document.querySelectorAll(".fa-star");
//number of stars displayed on the start game 
let starsNumber = 3;

// refresh button 
let restart = document.querySelector(".fa-repeat");

//data for time function
let hours = 0;
let minutes = 0;
let seconds= 0;
let timer;
let clock = document.querySelector(".clock");
let timerResult;

//variables for popup panel
const final = document.querySelector(".final");
const content= document.querySelector(".final-content");
const totalMoves = document.querySelector(".total-moves");
const totalRating = document.querySelector(".total-rating");
const totalTime = document.querySelector(".total-time");
const playAgain = document.querySelector(".play-again");

//-----------------------------------------------------------------------------------

// one the page will be loaded, game starts
window.onload = startGame();

function startGame(){

  //to shuffled cards
  shuffledCards = shuffle(pictures);

  //the array for shuffled cards
  let newCards = [];

  //cover all cards
  deck.innerHTML= "";

  //give new content to each card element

  for (let i= 0; i < shuffledCards.length; i++){
      newCards += "<li class='card'><i class='fa " + shuffledCards[i] + "'></i></li>"
  }
  //put the cards on the screen
  deck.innerHTML = newCards;

  //I need to add event listener to every card
  cards = document.querySelectorAll('.card');
   
  //Event listener function
  click();
  function click(){
    for (let i=0; i < cards.length; i++) {
      cards[i].addEventListener("click", compareCards);
    }
  }
  time();
}

//adding event listener to the restart button

restart.addEventListener('click', function() {
  restartFunction();
});

function restartFunction(){
//removing all classes from cards
  for (let i=0; i < cards.length; i++) {
    cards[i].classList.remove("open", "show", "match", "not-active");
  };
  //reseting moves, scores,hours,machedcards.
  resetingMoves();
  resetingStars();
  hours = 0;
  minutes = 0;
  seconds= 0;
  matchedCards = [];
  clock.innerHTML = "";
  //stop the time
  clearInterval(timer);
  //start game 
  startGame();
}

//comparing cards clicek by user. This is the event Listener function for all cards

function compareCards() {
  //if card will be cliked change the class to open
  this.classList.toggle("open");

  //add it to the list of opened cards
  openedCards.push(this);
  let long = openedCards.length;
  let firstC = openedCards[0].firstElementChild.classList.value;
  let secondC = openedCards[1].firstElementChild.classList.value;

  
  if(long === 2){
   //if the list will have 2 cardsmake other cards not clickabale
   notActiv();
   //count one move
   moveCalc();
   ranking();
  
    if(firstC === secondC) {
      //if the cards will be the same lock in the open position, other cards are again clickable
      theSame();
      activ();
    } else {
      notTheSame();  
      }
  }
  //check if the game is over
  gratulations();
}

//function for mached cards
function theSame(){

  matchedCards.push(this);

  openedCards[0].classList.remove("open");
  openedCards[0].classList.add("show");
  openedCards[0].classList.add("match");
  openedCards[1].classList.remove("open");
  openedCards[1].classList.add("show");
  openedCards[1].classList.add("match");

  openedCards[0] = 0;
  openedCards[1] = 0;

  openedCards = [];
}


function notTheSame(){
//if cards are not the same, i need to close them again - removing class open; and add them new class un-match user can't click them again
  openedCards[0].classList.remove("open");
  openedCards[1].classList.remove("open");

  openedCards[0].classList.add("un-match");
  openedCards[1].classList.add("un-match");

//cards will be closed and clickable again after 700 milisekonds.
  setTimeout(function(){
    openedCards[0].classList.remove("un-match");
    openedCards[1].classList.remove("un-match");
    openedCards[0] = 0;
    openedCards[1] = 0;
    openedCards = [];
    activ();
  }, 700);


}

function notActiv() {
  for (let i=0; i < cards.length; i++) {
    cards[i].classList.add("not-active");
  };
}

function activ() {
  for (let i=0; i < cards.length; i++) {
    cards[i].classList.remove("not-active");
  };
}

/*
FUNCTION WHICH COUNTING MOVES, SCORES
*/

function moveCalc(){
  move++;
  moves.innerHTML=move;
}

function ranking(){
  if ((move >= 10) && (move < 14)){
    stars[2].style.color="#FFF";
    starsNumber = 2;
  }
  else if ((move > 15) && (move < 20)){
    stars[1].style.color="#FFF";
    starsNumber = 1;
  }
  else if(move > 21) {
   stars[0].style.color="#FFF";
   starsNumber = 0;
 } 
 console.log ("You got " + starsNumber + " stars");
}


/*
TIME FUNCTION
*/

function time() {

  timer = setInterval(function(){

    clock.innerHTML = minutes+"m "+seconds+"s";

    seconds++;
    if(seconds == 60){
      minutes++;
      seconds=0;
    }
    if(minutes == 60){
      hours++;
      minutes = 0;
    }
  },1000);
}


function resetingMoves (){
  move = 0;
  moves.innerHTML = move;
}

function resetingStars (){
  stars[0].style.color="#000";
  stars[1].style.color="#000";
  stars[2].style.color="#000";
}


function gratulations() {
//If the will be full, then end of the game and 
  if (matchedCards.length === 8) {

    clearInterval(timer);
    final.classList.replace("hide", "popup");
    totalMoves.innerHTML = move;
    totalRating.innerHTML = starsNumber;
    totalTime.innerHTML = hours + "h " + minutes + "m " + (seconds-1) + "s ";
  }
}

//event listenr for popup play again button

playAgain.addEventListener("click", function(){
 final.classList.replace("popup","hide");
 restartFunction();
});
