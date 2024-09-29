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


const buttonList = document.querySelector(".container > .playing-area > .playing-buttons");

function gamePlay(userPlayMode, computerPlayMode) {
    // if (userPlay==""){
    //     return 0;
    // } 
    // let computerPlay = getComputerPlay();
    // 1 => player wins
    // 2 => computer wins
    // 3 => draw(invalid input)

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

let win=0, loss=0, draw=0;

function playGame(userPlayMode, computerPlayMode){
    let r = gamePlay(userPlayMode, computerPlayMode)
    if(r==0 || r==3) draw+=1; 
    if(r==1) win+=1;
    if(r==2) loss+=1;
}


const status_text = document.querySelector(".status-title");
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
        } else {
            status_text.textContent = "Sorry, You Lost! 😵‍💫"
        }
        win = 0;
        draw = 0;
        loss = 0;
        rnd = 0;
    }
    
});
