
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
console.log("The player score is " + scoreObject.playerScore + " points.");
console.log("The computer score is " + scoreObject.compScore + " points.");

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


function game() {



    for(i = 0; i < 5; i++) {
        
        let playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
        let computerChoice = computerPlay().toLowerCase();
        console.log(playerChoice);
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

        function declareWinner() {
            let winner = "";

            if(scoreObject.playerScore > scoreObject.compScore) {
                winner = "Player";
            } else if(scoreObject.playerScore > scoreObject.compScore) {
                winner = "Computer"
            } else {
                winner = "Draw"
            }
            console.log(winner);
        }

        keepScore();
        console.log("The player has " + scoreObject.playerScore + " points.");
        console.log("The computer has " + scoreObject.compScore + " points.");
    }
    declareWinner();
}

game();