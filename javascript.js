// Add event listener to get human choice
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;

  playRound(humanChoice, getComputerChoice());
  });
});

// Prepare to show results
const score = document.querySelector("#results h3");
const results = document.querySelector("#results");
const current = document.querySelector("#results p")

function getComputerChoice() {
  // Get a random number between 0 to 3
  const randomNumber = Math.floor(Math.random() * 3);
  
  // IF the number is 0, return rock
  // ELSE IF the number is 1, return paper
  // ELSE return scissors
  if (randomNumber === 0) {
    return "rock";
  }
  else if (randomNumber === 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

  // Create valuables to keep track of human/computer scores
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {  
    // Variable to show current game result
    let text = "";
    
    // IF choices are the same, it's a tie
    if (humanChoice === computerChoice) {
      text = "It's a tie!";
    // ELSE IF humanChoice is rock
    } else if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        text = "You win! Rock beats Scissors";
        humanScore++;
      } else {
        text = "You lose! Paper beats Rock";
        computerScore++;
      }
    // ELSE IF humanChoice is paper
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        text = "You win! Paper beats Rock";
        humanScore++;
      } else {
        text = "You lose! Scissors beats Paper";
        computerScore++;
      }
    // ELSE (humanChoice is scissors)
    } else {
      if (computerChoice === "paper") {
        text = "You win! Scissors beats Paper";
        humanScore++;
      } else {
        text = "You lose! Rock beats Scissors";
        computerScore++;
      }
    }

    // Show score
    score.textContent = "Score: " + humanScore + " - " + computerScore;
    // Show what's going on
    current.textContent = text;

    // When one player reaches 5 points, dacrare the winner
    if (humanScore === 5 || computerScore === 5) {
      if (humanScore > computerScore) {
        const winner = document.createElement("h2");
        winner.textContent = "YOU WIN!"
        results.insertBefore(winner, score);
      } else {
        const winner = document.createElement("h2");
        winner.textContent = "YOU LOSE!";
        results.insertBefore(winner, score);
      }

      // Prevent the buttons from working
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  }