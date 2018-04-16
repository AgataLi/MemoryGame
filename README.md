# Memory Game Project


## About the project.

This is a project made in frame of Front- End Web Develeoper curs in [udacity.com](www.udacity.com)
The aim of the project was to create simple memory game, using HTML, CSS and JavaScript. 
The project is one of 8 projects required to finish the course. 

It was the first project in which I had to combined such knowledge of JavaScript, CSS und HTML 
It was also my first ever, so complicated project. And I thought I will never manage, but yet I did. And now I also know that I could do many things better.

## Game Description 

It is a simple game, which starts whenever user will click on one of the 16 cards. 
Once card is clicked, it will be shown to the player. He needs to click the next card and see if the symbols on them are the same. If they aren't then the cards will be covered again, and player looks for pairs among the hidden cards. Once he find pair, the cards stay open. 
Once user will find all cards, game is over. 


### How to play

 * click on a card
 * find a pair for the card
 * you can open only 2 cards at once
 * once you will find all pairs, you won

### Scorse
* one move equals two opened cards
* once you click the first card time runs
 

## Game construction

As it was a project in the frame of the course, I was supported with HTML code and some CSS code. In the javascript all participant become shuffle function from (http://stackoverflow.com/a/2450976). The rest of code I created by my own. By manipulating the DOM, adding items to the arrays, toggeling with classes, I created code which is desribed below.

Once the page is loaded, `preapartion function` runs. It covers all cards, cleans data, like moves and time interval, shuffles cards, turn on event listener for ever singled card: the main `function compareCards`: 
```
* to protect against mistakes with time counting, first it removes time from cards eventListener.
* shows clicked card, move this to openedCards array
* second cliced card is moved to openedCards array, compared with the first one
* if the cards are the same it activate `theSame function`
* if the cards are not the same, it activated the `notTheSame function`. 
* whenever 2 cards are open, function calls `move counter` and `ranking` function. 
* at the end the `compareCards function`, checks if the game is over by calling `gratulations function`
```

`theSame function` and `notTheSame function`
```
 Basicaly this two functions are adding and removing classes, from every opened card. Here I created also not-activ class prevent possibility of clicking third card, or clicking cards while the first pair is not compared yet.

```

`gratulations function`
```
If the game is over then the popup window come up, shows time, numbers of moves and numbers of stars player got. We can play again by clicking a `button playAgain`. An event Listener for this function, close the popup window, and calls `preparation function`.
User can also reset game, by clicking the reset button.
```

## Sourses 



I the project I was using:
* [MDN web docs] (https://developer.mozilla.org/son/docs/Tools)
* [w3schools.com] (https://www.w3schools.com)
* *JavaScript & jQuery. Interaktive Websites entwickeln* by Jon Duckett