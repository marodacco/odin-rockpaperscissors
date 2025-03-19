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

function getHumanChoice() {
  // Get a user input
  return prompt("rock, paper or scissors");
}

function playGame() {
  // Create valuables to keep track of human/computer scores
  let humanScore = 0;
  let computerScore = 0;

  // WHILE the number is under 5, the game continues
  let n = 0;
  while (n < 5 ) {
    // Get the choices
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    n++;
  }

  // Compare the results and daclare the winner
  if (humanScore === computerScore) {
    console.log("It's a tie! You: " + humanScore + " vs Computer: " + computerScore);
  } else if (humanScore > computerScore) {
    console.log("Winner: You! You: " + humanScore + " vs Computer: " + computerScore);
  } else {
    console.log("Winner: Computer! You: " + humanScore + " vs Computer: " + computerScore);
  }
  
  function playRound(humanChoice, computerChoice) {
    // Make humanChoise case-insensitive
    humanChoice = humanChoice.toLowerCase();
  
    // IF choices are the same, it's a tie
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    // ELSE IF humanChoice is rock
    } else if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
      } else {
        console.log("You lose! Paper beats Rock");
        computerScore++;
      }
    // ELSE IF humanChoice is paper
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
      } else {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
      }
    // ELSE (humanChoice is scissors)
    } else {
      if (computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
      } else {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
      }
    }
  }
}

playGame();