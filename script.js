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

function game(){
    let score = 0
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt();
        let string = playRound(playerSelection, computerSelection);
        console.log(string);
        if (string.includes("win")){
            score += 1;
        }
    }

    if(score>3){
        console.log("You win!");
    }
    else if(score == 3){
        console.log("Draw");
    }
    else{
        console.log("You lose!");
    }

}


game();