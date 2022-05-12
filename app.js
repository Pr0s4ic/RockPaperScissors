// Getting DOM Contents
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const round = document.querySelector(".round");

const choicePlayer = document.querySelector(".c-player");
const choiceComputer = document.querySelector(".c-computer");

const scorePlayer = document.querySelector(".s-player");
const scoreComputer = document.querySelector(".s-computer");

const playStatus = document.querySelector(".status");
const resetBtn = document.querySelector(".reset");

let sPlayer = 0;
let sComputer = 0;
let roundCounter = 0;

function computerPlay() {
    index = Math.floor((Math.random() * 3));

    if (index == 0) {
        choiceComputer.innerHTML = "ROCK";
    } else if (index == 1) {
        choiceComputer.innerHTML = "PAPER";
    } else if (index == 2) {
        choiceComputer.innerHTML = "SCISSORS";
    }
};

function verify() {
    round.innerHTML = "Round " + ++roundCounter;

    let cp = choicePlayer.innerHTML;
    let cc = choiceComputer.innerHTML;

    if (cp == cc) {
        choicePlayer.style.color = "black";
        choiceComputer.style.color = "black";
        playStatus.innerHTML = "Draw!";
    } else if (cp == "ROCK" && cc == "SCISSORS") {
        playerVerify();        
    } else if (cp == "PAPER" && cc == "ROCK") {
        playerVerify();
    } else if (cp == "SCISSORS" && cc == "PAPER") {
        playerVerify();
    } else if (cc == "ROCK" && cp == "SCISSORS") {
        computerVerify();
    } else if (cc == "PAPER" && cp == "ROCK") {
        computerVerify();
    } else if (cc == "SCISSORS" && cp == "PAPER") {
        computerVerify();
    };
};

function playerVerify() {
    choicePlayer.style.color = "green";
    choiceComputer.style.color = "red";
    scorePlayer.innerHTML = "Score: " + ++sPlayer;
    playStatus.innerHTML = "Player won!";
}

function computerVerify() {
    choicePlayer.style.color = "red";
    choiceComputer.style.color = "green";
    scoreComputer.innerHTML = "Score: " + ++sComputer;
    playStatus.innerHTML = "Computer won!";
}

function endGame() {
    if (sPlayer == 5) {
        playStatus.innerHTML = "Player won the game!";
        resetBtn.style.display = "block";
    } else if (sComputer == 5) {
        playStatus.innerHTML= "Computer won the game!";
        resetBtn.style.display = "block";
    }
}

rock.addEventListener("click", function() {
    choicePlayer.innerHTML = "ROCK";
    computerPlay();
    verify();
    endGame();
});

paper.addEventListener("click", function() {
    choicePlayer.innerHTML = "PAPER";
    computerPlay();
    verify();
    endGame();
});

scissors.addEventListener("click", function() {
    choicePlayer.innerHTML = "SCISSORS";
    computerPlay();
    verify();
    endGame();
});

resetBtn.addEventListener("click", function() {
    location.reload();
})
