
// Rock Paper Scissors
// Global Variables
let playerScore = 0;
let compScore = 0;


function computerPlay() {
    const compChoices = ["rock", "paper", "scissors" ];
    const random = Math.floor(Math.random() * compChoices.length);
    return compChoices[random];
}

function playRound( playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "Tie round.";
    } else if ( playerChoice == "rock" && computerChoice == "scissors") {
        playerScore = playerScore + 1;
        return "You win! Rock smashes scissors.";
    } else if ( playerChoice == "rock" && computerChoice == "paper") {
        compScore = compScore + 1;
        return "You lose. Paper covers rock.";
    } else if ( playerChoice == "paper" && computerChoice == "scissors") {
        compScore = compScore + 1;
        return "You lose. Scissors cuts paper.";
    } else if ( playerChoice == "paper" && computerChoice == "rock") {
        playerScore = playerScore + 1;
        return "You win! Paper covers rock.";
    } else if ( playerChoice == "scissors" && computerChoice == "rock") {
        compScore = compScore + 1;
        return "You lose. Rock smashes scissors.";
    } else if ( playerChoice == "scissors" && computerChoice == "paper") {
        playerScore = playerScore + 1;
        return "You win! Scissors cuts paper.";
    }
}


function game() {

    for(i = 0; i < 5; i++) { 
        let playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
        let computerChoice = computerPlay().toLowerCase();
    
        console.log(playerChoice);
        console.log(computerChoice);

        playRound(playerChoice, computerChoice);
        console.log(playRound(playerChoice, computerChoice));

        console.log("Player has " + playerScore + " points.");
        console.log("Computer has " + compScore + " points.");

    }
}

game();