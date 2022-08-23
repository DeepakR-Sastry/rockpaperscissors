function getComputerChoice() {
    let list = ["Rock", "Paper", "Scissors"];
    let x = Math.floor(Math.random() * 3);
    return list[x];
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "It's a draw!"
        }
        else if(computerSelection == "paper"){
            return "You lose! Paper beats rock";
        }
        else{
            return "You win! Rock beats scissors";
        }
    }

    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "You win! Rock beats paper";
        }
        else if(computerSelection == "paper"){
            return "It's a draw";
        }
        else{
            return "You lose! Scissors beats paper";
        }
    }

    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "You lose! Rock beats scissors";
        }
        else if(computerSelection == "paper"){
            return "You win! Scissors beats paper";
        }
        else{
            return "It's a draw!";
        }
    }
}

let roundsPlayed = score = 0;
let divSelection = document.querySelector("#round-status");
let gameStatus = document.querySelector("#game-status");
function clickedButton(id){
    gameStatus.textContent = "";
    if(roundsPlayed == 5){
        if(score>=3){
            gameStatus.textContent = "You won the game!"
        }
        else{
            gameStatus.textContent = "You lost the game!"
        }
        roundsPlayed = 0;
        score = 0;
    }
    let computerSelection = getComputerChoice();
    let string = playRound(id, computerSelection);
    roundsPlayed += 1;
    console.log(string);
    divSelection.textContent = string;
    if(string.includes("win")){
        score += 1;
    }




    

}

// function game(){
//     let score = 0

//     for (let i = 0; i < 5; i++){
//         let computerSelection = getComputerChoice();
//         let buttons = document.querySelectorAll("button");

//         buttons.forEach((button) => {
//             button.addEventListener('click', function (e){
//                 console.log(e.target.id);
//             });
//         })

//         // console.log(buttonID);
//         // let string = playRound(buttonID, computerSelection);
//         // console.log(string);
//         // if (string.includes("win")){
//         //     score += 1;
//         // }
//     }

//     if(score>3){
//         console.log("You win!");
//     }
//     else if(score == 3){
//         console.log("Draw");
//     }
//     else{
//         console.log("You lose!");
//     }

// }


// game();