var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variable for wins, losses, and guesses remaining

var Wins = 0;
var Losses = 0;
var GuessesLeft = 9;
var GuessesSoFar = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("Wins-text");
var lossesText = document.getElementById("Losses-text");
var GuessesLeftText = document.getElementById("GuessesLeft-text");
var GuessesSoFarText = document.getElementById("GuessesSoFar");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

//Computer random letter choice

var computerChoice = letters[Math.floor(Math.random() * letters.length)];

console.log(computerChoice);


    if (userGuess === computerChoice){
        Wins++;
        GuessesLeft = 9;
        GuessesSoFar = [];
    }
    else{

        GuessesLeft--;
        GuessesSoFar.push(userGuess);
    }

    if(userGuess === 0){

        Losses++;
        GuessesLeft = 9;
        GuessesSoFar = [];

    };  
//Guesses so far function



//Display the user and computer guesses, and wins/losses/guesses left.
winsText.textContent = "Wins: " + Wins;
lossesText.textContent = "Losses: " + Losses;
GuessesLeftText.textContent = "Guesses Left: " + GuessesLeft;
GuessesSoFarText.textContent = "Guesses so far: " + GuessesSoFar;

};


