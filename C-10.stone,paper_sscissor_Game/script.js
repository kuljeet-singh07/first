let  userScore = 0;
let compScore = 0; 

const choice = document.querySelectorAll(".img-box");
const msg = document.querySelector(".msg-container");
const user= document.querySelector("#user-score");
const comp= document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIndx = [Math.floor(Math.random()*3)];
    return options[randIndx];
};

const drowGame = () =>{
    
    msg.innerText= "Game was Draw . play again."
   msg.style.backgroundColor = "#081b31";
}


const showWinner=(userWinn,userChoice,compChoice)=>{
    if(userWinn){
        userScore++;
        user.innerText = userScore;
       
        msg.innerText= `you Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        

    }
    else{
        compScore++;
        comp.innerText= compScore;
    
        msg.innerText= `you loos! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
}
const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    // generate computer choice :
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice ===compChoice){
        //Draw game;
         drowGame();
    }
    else{
        let userWinn =true;
        if(userChoice ==="rock"){
            //scissor ,paper ;
            userWinn =compChoice==="paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock ,scissor 
            userWinn=compChoice==="scissors" ? false : true;
        }
        else{
            //rock , paper; 
            userWinn= compChoice === "rock" ? false : true;
        }
        showWinner(userWinn,userChoice,compChoice);
    }
 };

  choice.forEach((choice)=>{ 
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
  })