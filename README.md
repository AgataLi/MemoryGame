# Memory Game Project

## About the project

This is a project made in the frame of Front- End Web Developer curs in [udacity.com](www.udacity.com)The aim of the project was to create a simple memory game, using HTML, CSS and JavaScript. The project is one of 8 projects required to finish the course.

## Game Description 
It is a simple game, which starts whenever user will click on one of the 16 cards. Once a card is clicked, it will be shown to the player. He needs to click the next card and see if the symbols on them are the same. If they aren't then the cards will be covered again, and the player looks for pairs among the hidden cards. Once he finds a pair, the cards stay open. Once user will find all cards, the game is over.

### How to play

You can play [here] (https://agatali.github.io/MemoryGame/) or clone the repo on you device.

* click on a card
* find a pair for the card
* you can open only 2 cards at once
* once you will find all pairs, you won

### Scorse
* one move equals two opened cards
* once you click the first card time runs

## Game construction

As it was a project in the frame of the course, I was supported with HTML code and some CSS code. In the javascript, all participant become shuffle function from (http://stackoverflow.com/a/2450976). The rest of the code I created on my own. By manipulating the DOM, adding items to the arrays, toggling with classes, I created code which is described below.

Once the page is loaded, preparation function runs. It covers all cards, cleans data, like moves and time interval, shuffles cards, turns on event listener for every single card: the main function compareCards:

* to protect against mistakes with time counting, first it removes time from cards eventListener.
* shows clicked card, move this to the openedCards array
* second clicked card is moved to the openedCards array, compared with the first one
* if the cards are the same it activate `theSame function`
* if the cards are not the same, it activated the `notTheSame function`. 
* whenever 2 cards are open, function calls `move counter` and `ranking` function. 
* at the end the `compareCards function`, checks if the game is over by calling `gratulations function`

### theSame function and notTheSame function

Basically, these two functions are adding and removing classes, from every opened card. Here I created also not-active class prevent the possibility of clicking the third card, or clicking cards while the first pair is not compared yet.


### gratulations function

If the game is over then the popup window comes up, shows time, numbers of moves and numbers of stars player got. We can play again by clicking a `button playAgain`. An event Listener for this function, close the popup window, and calls `preparation function`.
The user can also reset the game, by clicking the reset button.

## Sourses 

In the project I was using:
* [MDN web docs] (https://developer.mozilla.org/son/docs/Tools)
* [w3schools.com] (https://www.w3schools.com)
* *JavaScript & jQuery. Interaktive Websites entwickeln* by Jon Duckett
