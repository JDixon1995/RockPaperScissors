
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

//Results Screen
playerBanner = document.getElementById("playerScore");
playerChoiceReadout = document.getElementById("playerChoiceReadout");
computerBanner = document.getElementById("computerScore");
computerChoiceReadout = document.getElementById("computerChoiceReadout");
playerScoreReadout = document.getElementById("playerScore");
computerScoreReadout = document.getElementById("computerScore");
resultsReadout = document.getElementById("resultsReadout");

// Buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

function computerPlay() {
    const compChoices = ["rock", "paper", "scissors" ];
    const random = Math.floor(Math.random() * compChoices.length);
    return compChoices[random];
}

function playRound( playerChoice, computerChoice) {


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

        let computerChoice = computerPlay().toLowerCase();
        playerChoiceReadout.innerHTML = "Player Choice : " + playerChoice;
        console.log(playerChoice);
        computerChoiceReadout.innerHTML ="Computer Choice: " + computerChoice;
        console.log(computerChoice);

        playRound(playerChoice, computerChoice);

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

        function determineRound() {
            if (gameObject.playerWins == null) {
                resultsReadout.innerHTML = "Result of Round: Draw."; 
            } else if (gameObject.playerWins == true) {
                resultsReadout.innerHTML = "Result of Round: You win that round.";
            } else if (gameObject.playerWins == false)  {
                resultsReadout.innerHTML = 
                "Result of Round: The computer wins that rounds.";
            }
        }

        function endGame() {
            if (scoreObject.playerScore == 5) {
                alert("You win!");
            } else if (scoreObject.compScore == 5) {
                alert("You lost, better luck next time.");
            } else return
        }

        keepScore();
        determineRound();
        endGame();
        playerScoreReadout.innerHTML = "Player Score : " + scoreObject.playerScore;
        console.log("The player has " + scoreObject.playerScore + " points.");
        computerScoreReadout.innerHTML = "Computer Score : " + scoreObject.compScore;
        console.log("The computer has " + scoreObject.compScore + " points.");
    }

// Event Listeners
rockButton.addEventListener("click", function(){
    console.log("You clicked the rock button.");
    playerChoice = "rock";
    game(playerChoice);
})
paperButton.addEventListener("click", function(){
    console.log("You clicked the paper button.");
    playerChoice = "paper";
    game(playerChoice);
})
scissorsButton.addEventListener("click", function(){
    console.log("You clicked the scissors button.")
    playerChoice = "scissors";
    game(playerChoice);
})