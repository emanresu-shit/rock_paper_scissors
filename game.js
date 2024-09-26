//game logic
//if userPlay is rock and computerPlay is paper => computer wins
//if userPlay is rock and computerPlay is scissor => user wins
//if userPlay is paper and computerPlay is rock => user wins
//if userPlay is paper and computerPlay is scissor => computer wins
//if userPlay is scissor and computerPlay is paper => user wins
//if userPlay is scissor and computerPlay is rock => computer wins
//otherwise the game is draw

//code
// function computerWins(){
//     alert("you've lost");
// }
// function humanWins(){
//     alert("you've won");
// }
// function gameDraw(){
//     alert("It's draw");
// }

// let computerPlay;
// let computerPlay;
// let userPlay;

// userPlay = prompt()
// if(userPlay === ""){
//     alert("Oh, you don't wann play, okay I get!");
// } else {
//     userPlay = userPlay.toLowerCase();
// }






// //checking if user input value is valid if not make the game draw(for a time todo)

// if(computerPlay === 1) computerPlay = "rock";
// if(computerPlay === 2) computerPlay = "paper";
// if(computerPlay === 3) computerPlay = "scissor";

// // game logic
// if(userPlay==="rock"){
//     if(computerPlay ==="paper") gameResult = 2;
//     if(computerPlay ==="scissor") gameResult = 1;
// } else if(userPlay === "paper"){
//     if(computerPlay === "rock")  gameResult = 1;
//     if(computerPlay === "scissor") gameResult = 2;
// } else if(userPlay === "scissor") {
//     if(computerPlay === "rock") gameResult = 2;
//     if(computerPlay === "paper") gameResult = 1;
// } else gameDraw();



//real game
//first get user input

function getUserPlay() {
    let playMode = prompt("what's your play? rock, paper or scissor");
    playMode = playMode.toLowerCase();
    if (!(playMode === "rock" || playMode === "paper" || playMode === "scissor")) {
        return "";
    }
    return playMode
}

// now get computer play
function getComputerPlay() {
    let playMode;
    let randNum = Math.floor(Math.random() * 100) + 1;
    if (randNum <= 33) {
        playMode = "rock";
    } else if (randNum > 33 && randNum <= 66) {
        playMode = "paper";
    } else {
        playMode = "scissor";
    }
    return playMode;
}

// now game magic
function gamePlay() {
    let userPlay = getUserPlay();
    if (userPlay==""){
        return 0;
    } 
    let computerPlay = getComputerPlay();

    let gameResult;
    if (userPlay === "rock") {
        if (computerPlay === "paper") gameResult = 2;
        if (computerPlay === "scissor") gameResult = 1;
    } else if (userPlay === "paper") {
        if (computerPlay === "rock") gameResult = 1;
        if (computerPlay === "scissor") gameResult = 2;
    } else if (userPlay === "scissor") {
        if (computerPlay === "rock") gameResult = 2;
        if (computerPlay === "paper") gameResult = 1;
    }

    if(userPlay == computerPlay){
        gameResult = 3;
    }
    return gameResult;
}
let win=0, loss=0;
function playGame(){
    let r = gamePlay()
    if(r==1) win+=1;
    if(r==2) loss+=1;
}
playGame();
playGame();
playGame();
playGame();
playGame();

if(win>loss){
    console.log("you Won!");
} else {
    console.log("you lost!")
}