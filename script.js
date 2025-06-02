console.log("Hello World!")
playGame();
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice===1){
        console.log("Computer Chose Rock");
        return choice;
        
    }
    else if(choice ===2){
        console.log("Computer Chose Paper");
        return choice;
    }
    else{
        console.log("Computer Chose Scissors");
        return choice;
    }
}
function normalizeInput(input) {
    // remove extra spaces, lowercase the whole thing, then capitalize first letter
    input = input.trim().toLowerCase();
    return input.charAt(0).toUpperCase() + input.slice(1);
}
function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper, or Scissors")
    humanChoice = normalizeInput(humanChoice);
    if (humanChoice==="Rock"){
        console.log("You Chose Rock");
        return 1;
    }
    else if(humanChoice ==="Paper"){
        console.log("You Chose Paper");
        return 2;
    }
    else{
        console.log("You Chose Scissors");
        return 3;
    }
}

function playRound(hChoice, cChoice){
    if(hChoice==cChoice){
        console.log("There is tie");
        return "tie";
    }
    //Rock beats scissors
    else if(hChoice===1 && cChoice===3 ){
        console.log("You Win!");
        return "human";
    }
    //paper beats rock
    else if(hChoice===2 && cChoice===1){
        console.log("You Win!")
        return "human";
    }
    //scissors beats paper
    else if(hChoice===3 && cChoice===2 ){
        console.log("You Win!");
        return "human";
    }
    else{
        console.log("Sorry the computer wins!");
        return "computer";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore =0;
    for(let i=0; i<5; i++){
        const result = playRound(getHumanChoice(), getComputerChoice());
        if(result ==="human"){
            humanScore+=1;
        }
        else if(result ==="computer"){
            computerScore+=1
        }
    }
    if(humanScore>computerScore){
        return console.log("YOU WIN THE ENTIRE GAME");
    }
    else if(humanScore===computerScore){
        return console.log("The whole game is a tie. How did you manage to do that?");
    }
    else{
        return console.log("Computer Wins the ENTIRE GAME");
    }
}