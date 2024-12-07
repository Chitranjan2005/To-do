let playerscore = 0;
let compscore = 0;

const icons = document.querySelectorAll(".icon");
const result = document.querySelector("h4");


const playercount = document.querySelector("#player");
const compcount = document.querySelector("#comp");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomoption = Math.floor(Math.random() * 3);
    return options[randomoption];
} 

const draw = () => {
    // console.log("game is draw");
}

const game = (playerchoice) => {
    // console.log("playerchoice =", playerchoice);
    const compchoice = gencompchoice();
    // console.log("compchoice =", compchoice);

 if(playerchoice === compchoice) {
draw();
result.innerText = "GAME IS DRAW";
result.style.backgroundColor = "#0a0908";

} else{
    let playerwin = true;
    if((playerchoice === "rock") && (compchoice === "scissors")){
         result.innerText = "YOU WIN";
         result.style.backgroundColor = "#55a630";
         playerscore++;
         playercount.innerText = playerscore;
         


    } else if((playerchoice === "scissors") && (compchoice === "paper")) {
        result.innerText = "YOU WIN";
        result.style.backgroundColor = "#55a630";
        playerscore++;
        playercount.innerText = playerscore;



    } else if((playerchoice === "paper") && (compchoice === "rock")) {
        result.innerText = "YOU WIN";
        result.style.backgroundColor = "#55a630";
        playerscore++;
        playercount.innerText = playerscore;



    }else {
        result.innerText = "YOU LOSE";
        result.style.backgroundColor = "#dd1c1a";
        compscore++
        compcount.innerText = compscore;
    }
}
}


icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        const playerchoice = icon.getAttribute("id")
        game(playerchoice);
    })
})


 
