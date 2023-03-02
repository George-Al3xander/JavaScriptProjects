let moves = ["rock","paper","scissors"];

function computerMove() {
    let randomNum = Math.floor(Math.random()*moves.length);
    let choice = moves[randomNum];
    return choice;
}

function play(playerChoice) {
    let ai = computerMove();
    
    if(ai==playerChoice) {
        ai = computerMove();
    } else {
        if (ai=="rock" && playerChoice =="scissors") {
            console.log(`Player: ${playerChoice} 
Computer: ${ai}`);
            console.log("COMPUTER WON!")
        }
        else if (ai=="scissors" && playerChoice =="paper") {
            console.log(`Player: ${playerChoice} 
Computer: ${ai}`);
            console.log("COMPUTER WON!")
        }
    
        else if (ai=="paper" && playerChoice =="rock") {
            console.log(`Player: ${playerChoice} 
Computer: ${ai}`);
            console.log("COMPUTER WON!")
        }
        
        else if (playerChoice=="rock" && ai =="scissors") {
            console.log(`Player: ${playerChoice} 
Computer: ${ai}`);
            console.log("PLAYER WON!")
        }
        else if (playerChoice=="scissors" && ai =="paper") {
            console.log(`Player: ${playerChoice} 
Computer: ${ai}`);
            console.log("PLAYER WON!")
        }
    
        else if (playerChoice=="paper" && ai =="rock") {
            console.log(`Player: ${playerChoice} 
Computer: ${ai}`);
            console.log("PLAYER WON!")
        }      
    }    
}

let player = prompt();

play(player);