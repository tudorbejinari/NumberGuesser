let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

//step 2

const compareGuesses = (humanScore, computerScore, secretScore) => {
    const humanDifference = Math.abs(secretScore - humanScore);
    const computerDifference = Math.abs(secretScore - computerScore);

    return humanDifference <= computerDifference ? true : false;
};

//Step 3

const updateScore = (congratsWinner) => {
    if (congratsWinner === "human") {
        humanScore++;
    } else if (congratsWinner === "computer") {
        computerScore++;
    }
};

// Step4

const advanceRound = () => currentRoundNumber++;