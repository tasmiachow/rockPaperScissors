console.log("Hello World!")
//playGame();
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
        return "There is a tie this round";
    }
    //Rock beats scissors
    else if(hChoice===1 && cChoice===3 ){
        return "You Win this round";
    }
    //paper beats rock
    else if(hChoice===2 && cChoice===1){
        console.log("You Win!")
        return "You Win this round";
    }
    //scissors beats paper
    else if(hChoice===3 && cChoice===2 ){
        console.log("You Win!");
        return "You Win this round";
    }
    else{
        console.log("Sorry the computer wins!");
        return "Computer wins this round";
    }
}

// function playGame(){
//     let humanScore = 0;
//     let computerScore =0;
//     for(let i=0; i<5; i++){
//         const overallResult = playRound(getHumanChoice(), getComputerChoice());
//         if(overallResult ==="You Win this round"){
//             humanScore+=1;
//         }
//         else if(overallResult ==="Computer wins this round"){
//             computerScore+=1
//         }
//     }
//     if(humanScore>computerScore){
//         return console.log("YOU WIN THE ENTIRE GAME");
//     }
//     else if(humanScore===computerScore){
//         return console.log("The whole game is a tie. How did you manage to do that?");
//     }
//     else{
//         return console.log("Computer Wins the ENTIRE GAME");
//     }
// }

const div = document.createElement("div")
const roundText = document.createElement("p");
const score = document.createElement("h3");

document.body.appendChild(div);
div.append(roundText);
div.appendChild(score);

let humanScore = 0;
let computerScore =0;
let round =0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//rock btn

// rock.addEventListener("click", function (e) {
//     console.log("You chose rock");
//     playRound(1, getComputerChoice());
// });
rock.addEventListener("click", ()=> {
    const result = playRound(1,getComputerChoice());
    if(result ==="You Win this round"){
        humanScore+=1;
    }
    else if(result==="Computer wins this round"){
        computerScore+=1;
    }
    score.textContent= " Your Score: " + humanScore + " Comp Score: " + computerScore; 
    roundText.textContent= result;
    round+=1;
    if(round===5){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if(humanScore>computerScore){
            roundText.textContent = "You've won the entire game";
        }
        else if(humanScore<computerScore){
            roundText.textContent = "Sorry the computer won the entire game";
        }
        else{
            roundText.textContent = "Somehow you've managed to tie the entire 5 rounds"
        }
    }
});

//paper btn

paper.addEventListener("click", ()=>{
    const result = playRound(2, getComputerChoice());
    if(result ==="You Win this round"){
        humanScore+=1;
    }
    else if(result==="Computer wins this round"){
        computerScore+=1;
    }
    score.textContent= " Your Score: " + humanScore + " Comp Score: " + computerScore; 
    roundText.textContent= result;
    round+=1;
    if(round===5){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if(humanScore>computerScore){
            roundText.textContent = "You've won the entire game";
        }
        else if(humanScore<computerScore){
            roundText.textContent = "Sorry the computer won the entire game";
        }
        else{
            roundText.textContent = "Somehow you've managed to tie the entire 5 rounds"
        }
    }
});

//scissor btn

scissors.addEventListener("click", ()=> {
    const result = playRound(3, getComputerChoice());
    if(result ==="You Win this round"){
        humanScore+=1;
    }
    else if(result==="Computer wins this round"){
        computerScore+=1;
    }
    score.textContent= " Your Score: " + humanScore + " Comp Score: " + computerScore; 
    roundText.textContent= result;
    round+=1;
    if(round===5){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if(humanScore>computerScore){
            roundText.textContent = "You've won the entire game";
        }
        else if(humanScore<computerScore){
            roundText.textContent = "Sorry the computer won the entire game";
        }
        else{
            roundText.textContent = "Somehow you've managed to tie the entire 5 rounds"
        }
    }
});



