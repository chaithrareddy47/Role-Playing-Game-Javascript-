console.log("Hello World");

// declaring variable  abd adding value
let xp = 0;
let health = 100;
let gold = 50;

let currentWeapon = 0;
let fighting;

let monsterHealth;

// let inventory = [ "stick", "dagger",  "sword"];
let inventory = [ "stick"];

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

// initialize buttons
// button1.onclick = goStore;
// button2.onclick = goCave;
// button3.onclick = fightDragon;

function goTown() {
   button1.innerText = 'Go to store';
		button2.innerText = 'Go to cave';
		button3.innerText = 'Fight dragon';
		button1.onclick = goStore;
		button2.onclick = goCave;
		button3.onclick = fightDragon;
		text.innerText =
			'You are in the town square. You see a sign that says \"Store\".';
}

function goStore(){
 button1.innerText = 'Buy 10 health (10 gold)';
 button1.innerText = 'You enter the store.';

 button1.onclick = "buyHealth";
 button2.onclick = 'buyWeapon';
 button3.onclick = 'goTown';

 text.innerText = 'You enter the store.';

}

function goCave(){
  console.log("Going to cave.");
   button2.onclick = goCave;
   button2.innerText = 'Buy weapon (30 gold)';
}

function fightDragon(){
  console.log("Fighting dragon.");
     button3.onclick = fightDragon;
     button3.innerText = 'Go to town square';
}


function buyHealth(){
  
}
function buyWeapon(){

}




