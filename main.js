
// Rock Paper Scissors

//Game State
let gameObject = {
    message : "placeholder",
    playerWins : null
};

let scoreObject = {
    playerScore : 0,
    compScore : 0
};

//Buttons
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");


console.log("The player score is " + scoreObject.playerScore + " points.");
console.log("The computer score is " + scoreObject.compScore + " points.");

function computerPlay() {
    const compChoices = ["rock", "paper", "scissors" ];
    const random = Math.floor(Math.random() * compChoices.length);
    return compChoices[random];
}

function playRound(playerChoice, computerChoice) {


    if (playerChoice === computerChoice) {
        gameObject.message = "Tie Rounds";
        gameObject.playerWins = null;
    } else if ( playerChoice == "rock" && computerChoice == "scissors") {
        gameObject.message = "You win! Rock smashes scissors.";
        gameObject.playerWins = true;
    } else if ( playerChoice == "rock" && computerChoice == "paper") {
        gameObject.message = "You lose. Paper covers rock.";
        gameObject.playerWins = false;
    } else if ( playerChoice == "paper" && computerChoice == "scissors") {
        gameObject.message = "You lose. Scissors cuts paper.";
        gameObject.playerWins = false;
    } else if ( playerChoice == "paper" && computerChoice == "rock") {
        gameObject.message = "You win! Paper covers rock.";
        gameObject.playerWins = true;
    } else if ( playerChoice == "scissors" && computerChoice == "rock") {
        gameObject.message = "You lose. Rock smashes scissors.";
        gameObject.playerWins = false;
    } else if ( playerChoice == "scissors" && computerChoice == "paper") {
        gameObject.message ="You win! Scissors cuts paper.";
        gameObject.playerWins = true;
    }
    return gameObject;
}

function declareWinner(scoreObject) {
    const { compScore, playerScore} = scoreObject;

    let winner = "";
    if (scoreObject.playerScore > scoreObject.compScore) {
        winner = "Player";
    } else if (scoreObject.compScore > scoreObject.playerScore) {
        winner = "Computer";
    }
    console.log( "The " + winner + " has won the game.");
}



function game() {



        function keepScore() {

            const { compScore, playerScore } = scoreObject;
            let result = playRound(playerChoice, computerChoice);
            console.log("Result of round is " + gameObject.playerWins);

        if (gameObject.playerWins == true) {
            return scoreObject = { compScore, playerScore: playerScore + 1};
        } else if (gameObject.playerWins == false) {
            return scoreObject = { compScore: compScore + 1, playerScore };
        }
    };

        keepScore();
        console.log("The player has " + scoreObject.playerScore + " points.");
        console.log("The computer has " + scoreObject.compScore + " points.");
    }

// Event Listeners
rockButton.onClick = playRound(playerChoice = "rock");
paperButton.onClick = playRound(playerChoice = "paper");
scissorsButton.onClick = playRound(playerChoice = "scissors");

game();
declareWinner(scoreObject);