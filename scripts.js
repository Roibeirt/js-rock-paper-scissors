//initialize and select needed dom elements

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {playRound("rock");});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {playRound("paper");});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {playRound("scissors");});

const resultOutput = document.querySelector('#output');
console.log(resultOutput);

// game code below


let comScore = 0;
let playScore = 0;

function computerChoice (){

    let numChoice = Math.floor(Math.random()*3);

    if (numChoice == 0){
        return "rock";
    }
    else if (numChoice == 1){
        return "paper";
    }
    else return "scissors";

}

function playRound(playerChoice){

    let comChoice = computerChoice();   

    //let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    
    if (playerChoice == comChoice) {

        comScore++;
        playScore++;
        console.log(comChoice + " " + playerChoice)
        resultOutput.textContent="Draw! Current Score: Player = "+playScore+" Computer = "+comScore;

    }
    else if (playerChoice == "rock"){
        if (comChoice == "scissors"){
            playScore++;
            console.log(comChoice + " " + playerChoice)
            announceRoundWinner("Player");
        }   else{ comScore++; announceRoundWinner("Computer");}
    }
    else if (playerChoice == "paper"){
        if (comChoice == "rock"){
            playScore++;
            announceRoundWinner("Player");
        }
        else {comScore++; announceRoundWinner("Computer");}
    }
    else{
        
        if (comChoice == "paper"){
            playScore++;
            announceRoundWinner("Player");
        }
        else {comScore++; announceRoundWinner("Computer");}
    }

    if (comScore == 5){
        if (playScore == 5){
            resultOutput.textContent="It's a tie! 5/5";
            playScore = 0;
            comScore = 0;
        }
        else {
            resultOutput.textContent=("Computer is the victor! "+comScore+"/"+playScore);
            playScore = 0;
            comScore = 0;
        }
    }else if (playScore ==5){

            resultOutput.textContent=("Player is the victor! "+playScore+"/"+comScore);
            playScore = 0;
            comScore = 0;
        }

}

function announceRoundWinner(winner){

    resultOutput.textContent=winner+" wins! Current Score: Player = "+playScore+" Computer = "+comScore;

}

function playGame(){

    let comScore = 0;
    let playScore = 0;

    for (let i=0; i<=4; i++) {

        console.log("Round "+(i+1)+"!");

        result = playRound();
        console.log(result);

        if (result == "Computer Wins!") {

            comScore++;

        }
        else if (result == "Player Wins!") {

            playScore++;

        }
    }

    if (comScore>playScore){

        console.log("Computer wins "+comScore+" to "+playScore);

    }
    else if (playScore>comScore){
        console.log("Player wins "+playScore+" to "+comScore);
    }
    else{
        console.log("Draw!");
    }

}
