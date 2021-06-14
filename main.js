// Rock Paper Scissors

function computerPlay() {
    const compChoices = ["rock", "paper", "scissors" ];
    const random = Math.floor(Math.random() * compChoices.length);
    return compChoices[random];
}

function playRound( playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "Tie round.";
    }
    if (playerChoice !== computerChoice) {
        return "Oops!"
    }
}

let playerChoice = "rock";
let computerChoice = computerPlay().toLowerCase();


console.log(playerChoice);
console.log(computerChoice);




console.log(playRound());