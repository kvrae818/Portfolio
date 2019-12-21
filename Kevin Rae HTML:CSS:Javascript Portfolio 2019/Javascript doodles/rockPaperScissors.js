const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  } else {
    console.log('Error!');
  }
}
//checks User input and converts to all lowercase
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
// generates Computer's answer
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie!';
    // determines a tie
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computers are superior!';
      // if user chooses rock and comp chooses paper, computer wins
    } else if (computerChoice != 'paper') {
      return 'I bow to you meatbag... for now.';
    }
    // if user chooses rock and computer chooses not paper or rock, user wins
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
        return 'Nice try, meatbag.';
      // if user chooses paper, and computer chooses scissors, computer wins
        } else if (computerChoice != 'scissors' && computerChoice != 'paper') {
          return 'I never liked this game anyway.';
        }
    //if user chooses paper and computer doesn't choose scissors or paper, computer looses
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Victory! HA!';
    } else if (computerchoice === 'paper') {
      return 'You will be the first to die in the uprising.'
    }
  }
}
//determines winner
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('Human chooses ' + userChoice + ', ' + 'Computer chooses ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
}
console.log(playGame());
