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

console.log(getComputerChoice());