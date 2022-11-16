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

function game(){
    let playerScore = 0;
    let pcScore = 0;
    for(let gameRound = 0; gameRound < 5; gameRound++){
        playerSelection = prompt("Rock? Paper? or Scissors?")
        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection)
        console.log(roundResult);
        let roundCount = roundResult.toString().slice(0,9);
        if (roundCount === "You win! "){
            playerScore = playerScore +1;
        } else if (roundCount === "You lose!"){
            pcScore = pcScore +1;
        };
    };
    if (playerScore > pcScore){
        alert("Congrats! you win the Bo5 round!")
    } else if (playerScore < pcScore){
        alert("Better luck next time. You lose for this Bo5 but you will win next time!")
    } else if (playerScore === pcScore){
        alert("It's a tie! Play another Bo5 to see who is the real winner!")
    };
};

game()
