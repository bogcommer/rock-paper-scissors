const humanScore = 0;
const computerScore = 0;



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
        alert("Invalid response.")
        getHumanChoice()
    }
}


console.log(getHumanChoice())
console.log(getComputerChoice())