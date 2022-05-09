let playerName = document.getElementById("player'sName");
let player1 = document.getElementById("player");
let computerTxt = document.getElementById("computer")
let rockBtn = document.getElementById("rock")
let paperBtn = document.getElementById("paper")
let scissorsBtn = document.getElementById("scissors")
let result = document.getElementById("display")
let startBtn = document.getElementById("startgame")

innerText= 0
let namey;
let computer;
let player;

startBtn.addEventListener("click", () => {
    let name = playerName.value
    namey = name.toUpperCase()
    player1.textContent = `${namey}:`
})

rockBtn.addEventListener ("click", () => {
    player = "ROCK"
    player1.textContent = `${namey} : ${player}`
    computerwork();
    result.textContent = checkWinner()
    computerTxt.textContent = `COMPUTER : ${computer}` 
})
paperBtn.addEventListener ("click", () => {
    player = "PAPER"
    player1.textContent = `${namey} : ${player}`
    computerwork()
    result.textContent = checkWinner()
    computerTxt.textContent = `COMPUTER : ${computer}` 
})
scissorsBtn.addEventListener ("click", () => {
    player= "SCISSORS"
    player1.textContent = `${namey} : ${player}`
    computerwork()
    result.textContent = checkWinner()
    computerTxt.textContent = `COMPUTER : ${computer}` 
})

function computerwork (){
    const answer = Math.floor(Math.random()*3) +1;

    if(answer == 1){
        computer = "PAPER"
    }
    else if (answer == 2){
        computer = "SCISSORS"
    }
    else if (answer == 3){
        computer = "ROCK"
    }
}
function checkWinner() {
    if(computer == player){
        return "A TIE!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "YOU WIIN!" :"YOU LOSE!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "YOU WIIN!" :"YOU LOSE!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "YOU WIIN!" :"YOU LOSE!"
    }
}