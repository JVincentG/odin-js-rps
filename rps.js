function getComputerChoice(){
    const answer = ['Rock', 'Paper' , 'Scissor'];
    const randomElement = Math.floor(Math.random() * answer.length);
    return answer[randomElement];
};

console.log(getComputerChoice())