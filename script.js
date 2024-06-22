const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");


function getRandomComputerResults()
{
    const options = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function hasPlayerWonTheRound(player, computer)
{
    if (player === "Rock" && computer === "Scissors")
        {
            return true
        }
    else if (player === "Scissors" && computer === "Paper")
        {
            return true;
        }
    else if(player === "Paper" && computer === "Rock")
        {
            return true;
        }
    else
        {
            return false;
        }
}

let playerScore = 0;
let computerScore = 0;
function getRoundResults(userOption)
{
    const computerResult = getRandomComputerResults();
    if(userOption === computerResult)
        {
            return `It's a tie! Both chose ${userOption}`
        }
    else if(hasPlayerWonTheRound(userOption, computerResult))
        {
            playerScore += 1;
            return `Player wins! ${userOption} beats ${computerResult}`
        }
    else 
        {
            computerScore += 1;
            return `Computer wins! ${computerResult} beats ${userOption}`
        }
}

function showResults(userOption)
{
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = `${playerScore}`;
    computerScoreSpanElement.innerText = `${computerScore}`;
    if ( playerScore === 3 )
        {
            winnerMsgElement.innerText = "Player has won the game!"
            resetGameBtn.style.display = "block";
            optionsContainer.style.display = "none";
        }
    else if (computerScore === 3)
        {
            winnerMsgElement.innerText = "Computer has won the game!";
            resetGameBtn.style.display = "block";
            optionsContainer.style.display = "none";
        }
}

function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = `${playerScore}`;
    computerScoreSpanElement.innerText = `${computerScore}`;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
};

resetGameBtn.addEventListener('click', resetGame);
rockBtn.addEventListener("click", function()
{
    showResults("Rock")
} 
);

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

