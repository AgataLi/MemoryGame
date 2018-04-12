# Memory Game Project

Project made in frame of Front- End Web Develeoper kurs in udacity.

The aim of the project is to create simple memory game, using HTML, CSS and JavaScript. 
The project is one of 8 projects required to finish the course. 

It was the first project in which I had to combined such knowledge of JavaScript, CSS und HTML 
It was also my first ever, so complicated project. And I thought I will never managed, but yet I did. And now I also know that I could do many things better.

/*=====================================
Game Functionality 
=====================================*/

The game starts when the page is loaded, with the startGame function. 
It shuffles cards, cover them, calls time function and turn on event listener for ever singled card - the main function compareCards. 

It compares two clicked cards. 
If the cards are the same it activate theSame function. 
If the cards are not the same, it activated the notThe Same function. 

Whenever 2 cards are open, function calls move counter and ranking function. 
At the end the compareCards function, checks if the game is over by calling gratulations function = then the popup window come up, we can play again by clicking a button playAgain. An event Listener for this function, close the popup window, and calls resetGame function.
User can also reset game, by clicking the reset button.

