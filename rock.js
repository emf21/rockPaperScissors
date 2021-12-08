// getting user choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error: No option selected!");
  }
};
// getUserChoice();
console.log(getUserChoice("rock"));
console.log(getUserChoice("Paper"));
// console.log(getUserChoice('bag));

// getting computer choice
getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    // defualt:
    // return 'Error';
  }
};
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

// creating function to determine winner
const determineWinner = (userChoice, computerChoice) => {
  // a tie
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }

  //  the bomb
  if (userChoice === "bomb") {
    return "Congratulations, yu won!";
  }
  // rock and paper
  if (userChoice === "rock" && computerChoice === "paper") {
    return "computer won!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return "You won!";
  }

  // scissorsn rock
  if (userChoice === "rock" && computerChoice === "scissors") {
    return "You won!";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "Computer won!";
  }

  // for scissors n paper
  if (userChoice === "scissors" && computerChoice === "paper") {
    return "You won!";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "computer won!";
  }
};
console.log(determineWinner("paper", "scissors"));
console.log(determineWinner("paper", "paper"));
console.log(determineWinner("rock", "scissors"));

// setting up results
const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
