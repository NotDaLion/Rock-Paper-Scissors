let hScore = 0;
let botScore = 0;

let randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
function getAI()
{
    let num = randomInt(0,2);
    switch(num){
        case 0:
            oppImg.src = "Images/scissors-icon.svg";
            return "scissors";
        case 1:
            oppImg.src = "Images/stone.png";
            return "rock";
        case 2:
            oppImg.src = "Images/paper-plane.png";
            return "paper";
    }
}
function botScored(human , AI){
    msg.textContent = `You lose! ${AI} beats ${human}`;
    botScore++;
}
function humanScored(human , AI){
    msg.textContent = `You win! ${human} beats ${AI}`;
    hScore++;
}
///help
function getResult(human,AI){
    switch(human){
        case "scissors":
            if(AI == "scissors"){
                msg.textContent = "You tied!";
            }
            else if(AI == "rock"){
                botScored(human,AI);
            }
            else if(AI == "paper"){
                humanScored(human,AI);       
            }
            playerImg.src = "Images/scissors-icon.svg";
            break;
        case "rock":
            if(AI == "scissors"){
                humanScored(human,AI);
            }
            else if(AI == "rock"){
                msg.textContent = "You tied!";
            }
            else if(AI == "paper"){
                botScored(human,AI);
            }
            playerImg.src = "Images/stone.png";
            break;
        case "paper":
            if(AI == "scissors"){
                botScored(human,AI);
            }
            else if(AI == "rock"){
                humanScored(human,AI);                
            }
            else if(AI == "paper"){ 
                msg.textContent = "You tied!";
            }
            playerImg.src = "Images/paper-plane.png";
            break;
        default:
            alert("you broke something didn't you")
    }
}
//gayme
function playRound(){
    switch(val){
        case "sci-btn":
            humanChoice = "scissors";
            
            break;
        case "rock-btn":
            humanChoice = "rock";
            break;
        case "paper-btn":
            humanChoice = "paper";
            break;
        default:
            "what the fuck";
    }
    let botChoice = getAI();
    getResult(humanChoice,botChoice);
    results.textContent = hScore + " : " + botScore;  
}
function playGame(){
    playRound();
    console.log(`Human: ${hScore} \nBot: ${botScore}`);
    if(hScore >= 5 || botScore >= 5){
        if(hScore > botScore){
            msg.textContent = "Human Wins!"
        }
        else{
            msg.textContent = "Bot Wins!"
        }
        hScore = 0;
        botScore = 0;
    }
}
 
//gui stuff
const sci_btn = document.querySelector("#sci-btn");
const rock_btn = document.querySelector("#rock-btn");
const paper_btn = document.querySelector("#paper-btn");
const play_btn = document.querySelector("#play-btn");
const btns = document.querySelectorAll(".btn");

const playerImg = document.querySelector("#player-img");
const oppImg = document.querySelector("#opp-img");
const results = document.querySelector("#results");
const msg = document.querySelector("#msg");

let sel_flag = false;
let val = "";
btns.forEach(element => {
    element.addEventListener("click", (event) => {
        if(event.target.id != "play-btn"){
            if(!sel_flag)
            {
                event.target.classList.toggle("selected")
                sel_flag = true;
                val = event.target.id;
            }
            else if(sel_flag){
                if(event.target.classList.contains("selected")){
                    event.target.classList.toggle("selected")
                    sel_flag = false;
                    val="";
                }
            }
        }
        else if(event.target.id == "play-btn" && !val==""){
            playGame();
        }
    })
});


