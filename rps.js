function getComputerChoice(){
    const answer = ['Rock', 'Paper' , 'Scissor'];
    const randomElement = Math.floor(Math.random() * answer.length);
    return answer[randomElement];
};

function playRound(playerSelection, computerSelection) {
    let playerAnswer = playerSelection.toLowerCase();
    let compAnswer = computerSelection.toLowerCase();
    
    if (playerAnswer === compAnswer){
        const capitalize = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1);
        const result = "Both of you answered "+ capitalize + ", It's a tie!";
        return result
    } else if (playerSelection === 'rock' && compAnswer === 'paper') {
        const result = "You lose! Paper beats Rock";
        return result
    } else if (playerSelection === 'paper' && compAnswer === 'scissor'){
        const result = "You lose! Scissor beats Paper";
        return result
    } else if (playerSelection === 'scissor' && compAnswer === 'rock'){
        const result = "You lose! Rock beats Scissor";
        return result
    } else if (playerSelection === 'rock' && compAnswer === 'scissor'){
        const result = "You win! Rock beats Scissor";
        return result
    } else if (playerSelection === 'paper' && compAnswer === 'rock'){
        const result = "You win! Paper beats Rock";
        return result
    } else if (playerSelection === 'scissor' && compAnswer === 'paper'){
        const result = "You win! Scissor beats Paper";
        return result
    };
};

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))