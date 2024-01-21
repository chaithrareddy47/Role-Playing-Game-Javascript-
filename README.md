# RPG - Dragon Repeller Game using Javascript from scrath

## Key learnings
- Depending on your browser, this might be opened by pressing F12 or Ctrl+Shift+I
- When a variable name has multiple words, the convention in JavaScript is to use what's called camelCase. The first word is lowercase, and the first letter of every following word is uppercase.

- You have been declaring your variables with the var keyword. However, in modern JavaScript it is best practice to use the let keyword instead. This fixes several unusual behaviors with var that can make your code difficult to debug.
   var xp = 0;
   var health = 100;
   var gold = 50;

   var currentWeapon = 0;

- JavaScript interacts with the HTML using the Document Object Model, or DOM. The DOM is a tree of objects that represents the HTML. You can access the HTML using the document object, which represents your entire HTML document.

One method for finding specific elements in your HTML is using the querySelector() method. The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector.

- Functions are special tools that allow you to run sections of code at specific times. You can declare functions using the function keyword. Here is an example of a function called functionName - note the opening and closing curly braces. 


- Comments allow you to add notes to your code. In JavaScript, single-line comments can be written with // and multi-line comments can be written with /* and */.

- button1 represents your first button element. These elements have a special property called onclick, which you can use to determine what happens when someone clicks that button.


- The innerText property controls the text that appears in an HTML element. For example:

const info = document.querySelector("#info");
info.innerText = "Hello World";

- You previously used an array to store strings. But arrays can store any data type. This time, your array will be storing objects. Objects are similar to arrays, but with a few differences. One difference is that objects use properties, or keys, to access and modify data.
Objects are indicated by curly braces. An empty object would look like {}.

- You previously used an array to store strings. But arrays can store any data type. This time, your array will be storing objects. Objects are similar to arrays, but with a few differences. One difference is that objects use properties, or keys, to access and modify data.
Objects are indicated by curly braces. An empty object would look like {}.

- # RPG Game

This is a simple RPG game written in JavaScript. The player starts in the town square and can choose to go to the store, the cave, or fight the dragon.

## Getting Started

To run the game, open the `index.html` file in a web browser.

## Gameplay

The game is played by clicking on the buttons to perform actions. The player can buy health and weapons in the store, and fight monsters in the cave. The player's goal is to defeat the dragon.

## Code Overview

The game is written in JavaScript and uses the HTML DOM to create the user interface. The code is organized into several functions, each of which is responsible for a specific part of the game.

### Main Function

The `main` function is the entry point of the game. It initializes the game state and calls the `update` function to display the current location.

```javascript
function main() {
  // Initialize game state
  let xp = 0;
  let health = 100;
  let gold = 50;
  let currentWeapon = 0;
  let fighting;
  let monsterHealth;
  let inventory = ['stick'];

  // Initialize buttons
  const button1 = document.querySelector('#button1');
  const button2 = document.querySelector('#button2');
  const button3 = document.querySelector('#button3');

  const text = document.querySelector('#text');
  const xpText = document.querySelector('#xpText');
  const healthText = document.querySelector('#healthText');
  const goldText = document.querySelector('#goldText');
  const monsterStats = document.querySelector('#monsterStats');
  const monsterName = document.querySelector('#monsterName');

  const monsterHealthText = document.querySelector('#monsterHealth');

  // Call update function to display current location
  update();
}
```

### Update Function

The `update` function is responsible for displaying the current location and updating the player's stats. It is called whenever the player changes location.

```javascript
function update(location) {
  // Update button text and onclick functions
  button1.innerText = location['button text'][0];
  button2.innerText = location['button text'][1];
  button3.innerText = location['button text'][2];

