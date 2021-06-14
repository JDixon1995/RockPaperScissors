// Rock Paper Scissors

function computerPlay() {
    const compChoices = ["rock", "paper", "scissors" ];
    const random = Math.floor(Math.random() * compChoices.length);
    return compChoices[random];
}

const playerChoice = "rock";
const computerChoice = computerPlay();

    console.log(playerChoice);
    console.log(computerChoice);


function playRound( playerChoice, computerChoice) {
    if( playerChoice === "rock" && computerChoice === "paper") {
        return "You lose, paper covers rock!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win, rock smashes scissors!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lose, rock smashes scissors!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win, scissors cuts paper!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You lose, rock covers paper!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose, scissors cuts paper!";
    } else if (playerChoice === computerChoice) {
        return "Tie round.";
    }
}

console.log(playRound());