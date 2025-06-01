console.log("Hello World!")
let humanScore = 0;
let computerScore =0;
getComputerChoice();
getHumanChoice();

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice===1){
        return console.log("Computer Chose Rock");
    }
    else if(choice ===2){
        return console.log("Computer Chose Paper");
    }
    else{
        return console.log("Computer Chose Scissors");
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper, or Scissors")
    if (humanChoice==="Rock"){
        return console.log("You Chose Rock");
    }
    else if(humanChoice ==="Paper"){
        return console.log("You Chose Paper");
    }
    else{
        return console.log("You Chose Scissors");
    }
}