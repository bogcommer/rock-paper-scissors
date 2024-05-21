

function getComputerChoice() {
    const ranNum = Math.floor(Math.random() * 3);

    if (ranNum === 0) {
        return "Rock";
    } else if (ranNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const question = prompt("Enter your rock, paper, scissors choice.");

    if (question.toLowerCase() === "rock" || question.toLowerCase() === "paper" || question.toLowerCase() === "scissors" ) {
        return question;
    } else {
        alert("Invalid response.");
        getHumanChoice();
    }
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        const lowHumanChoice = humanChoice.toLowerCase();
        computerChoice = getComputerChoice();

        console.log("Computer: " + computerChoice);
        console.log("Human: " + humanChoice)
    
        if (lowHumanChoice == "rock" && computerChoice == "Scissors") {
            humanScore++;
            return "Rock beats scissors.";
        } else if (lowHumanChoice == "paper" && computerChoice == "Rock") {
            humanScore++;
            return "Paper beats rock";
        } else if (lowHumanChoice == "scissors" && computerChoice == "Paper") {
            humanScore++;
            return "Scissors beats paper";
        } else if (lowHumanChoice == "scissors" && computerChoice == "Rock") {
            computerScore++;
            return "Rock beats scissors.";
        } else if (lowHumanChoice == "rock" && computerChoice == "Paper") {
            computerScore++;
            return "Paper beats rock";
        } else if (lowHumanChoice == "paper" && computerChoice == "Scissors") {
            computerScore++;
            return "Scissors beats paper";
        } else {
            return "Tie";
        }
    }

    for (let i = 0; i < 6; i++) {
        if (i >= 5) {
            console.log("Round: " + i + " : Computer score: " + computerScore + " : " + "Player score: " + humanScore);
            if (humanScore > computerScore) {
                console.log("Player wins");
            } else {
                console.log("Computer wins");
            }
        } else {
            console.log("Round: " + i + " : Computer score: " + computerScore + " : " + "Player score: " + humanScore);
            console.log(playRound())
        }
    }
}

playGame()