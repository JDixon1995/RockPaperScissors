// Rock Paper Scissors

function computerPlay() {
    const compChoices = ["rock", "paper", "scissors" ];
    const random = Math.floor(Math.random() * compChoices.length);
    return compChoices[random];
}

function playRound( playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "Tie round.";
    } else if ( playerChoice == "rock" && computerChoice == "scissors") {
        return "You win! Rock smashes scissors."
    } else if ( playerChoice == "rock" && computerChoice == "paper") {
        return "You lose. Paper covers rock."
    } else if ( playerChoice == "paper" && computerChoice == "scissors") {
        return "You lose. Scissors cuts paper."
    } else if ( playerChoice == "paper" && computerChoice == "rock") {
        return "You win! Paper covers rock."
    } else if ( playerChoice == "scissors" && computerChoice == "rock") {
        return "You lose. Rock smashes scissors."
    } else if ( playerChoice == "scissors" && computerChoice == "paper") {
        return "You win! Scissors cuts paper." 
    }
}
let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
let computerChoice = computerPlay().toLowerCase();


console.log(playerChoice);
console.log(computerChoice);




console.log(playRound(playerChoice, computerChoice));