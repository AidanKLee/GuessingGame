let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
};

const getAbsoluteDistance = (player, target) => {
  let result;
  if (player >= target) {
    return player - target;
  } else {
    return target - player;
  }
};

const compareGuesses = (human, pc, target) => {
  if (human < 0 || human > 9) {
    alert("You must enter a number between 0 and 9. Computer Wins!")
  } else {
    human = getAbsoluteDistance(human, target);
    pc = getAbsoluteDistance(pc, target);
  if (human <= pc) {
    return true;
  } else {
    return false;
    }
  }
};

const updateScore = winner => {
  if (winner === 'human') {
    return humanScore ++;
  } else {
    return computerScore ++;
  }
};

const advanceRound = () =>  currentRoundNumber ++;
