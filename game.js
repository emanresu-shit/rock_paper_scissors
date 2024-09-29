function getComputerPlay() {
    let playMode;
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        playMode = "rock";
    }else if(randNum == 2) {
        playMode = "paper";
    } else {
        playMode = "scissor";
    }
    return playMode;
}


const buttonList = document.querySelector(".container > .playing-area > .playing-buttons");

function gamePlay(userPlayMode, computerPlayMode) {

    let gameResult;
    if (userPlayMode === "rock") {
        if (computerPlayMode === "paper") gameResult = 2;
        if (computerPlayMode === "scissor") gameResult = 1;
    } else if (userPlayMode === "paper") {
        if (computerPlayMode === "rock") gameResult = 1;
        if (computerPlayMode === "scissor") gameResult = 2;
    } else if (userPlayMode === "scissor") {
        if (computerPlayMode === "rock") gameResult = 2;
        if (computerPlayMode === "paper") gameResult = 1;
    }

    if(userPlayMode == computerPlayMode){
        gameResult = 3;
    }
    return gameResult;   
}

let win=0, loss=0, draw=0;

function playGame(userPlayMode, computerPlayMode){
    let r = gamePlay(userPlayMode, computerPlayMode)
    if(r==0 || r==3) draw+=1; 
    if(r==1) win+=1;
    if(r==2) loss+=1;
}


const status_text = document.querySelector("#status-title");
const rounds = document.querySelector("#round");
const humanScore = document.querySelector("#WIN");
const drawScore = document.querySelector("#DRAW")
const computerScore = document.querySelector("#LOSS")


let rnd = 0;

let userPlay, computerPlay, gameResult;
buttonList.addEventListener("click", (event)=>{
    let target = event.target;
    if(rnd < 5){
        status_text.textContent = "";
    }
    
    switch(target.id){
        case "rock":
            userPlay = target.id;
            computerPlay = getComputerPlay();
            playGame(userPlay, computerPlay);
            
            rounds.textContent = ++rnd;

            break;
        case "paper":
            userPlay = target.id;
            computerPlay = getComputerPlay();
            playGame(userPlay, computerPlay);
            rounds.textContent = ++rnd;
            break;
        case "scissor":
            userPlay = target.id;
            computerPlay = getComputerPlay();
            playGame(userPlay, computerPlay);
            rounds.textContent = ++rnd;
            break;
    }
    humanScore.textContent = win;
    drawScore.textContent = draw;
    computerScore.textContent = loss;

    if(rnd >= 5){
        if(win > loss){
            status_text.textContent = "Congratulations, You Won 👏";
        } else if(loss >win) {
            status_text.textContent = "Sorry, You Lost! 😵‍💫"
        } else {
            status_text.textContent = "Game is a tie! 😊";
        }
        win = 0;
        draw = 0;
        loss = 0;
        rnd = 0;
    }
    
});
