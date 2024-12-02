let playerscore = 0;
let compscore = 0;

const icons = document.querySelectorAll(".icon");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomoption = Math.floor(Math.random() * 3);
    return options[randomoption];
} 

const draw = () => {
    console.log("game is draw");
}

const game = (playerchoice) => {
    console.log("playerchoice =", playerchoice);
    const compchoice = gencompchoice();
    console.log("compchoice =", compchoice);

if(playerchoice === compchoice) {
draw();
} else{
    let playerwin = true;
    if((playerchoice = "rock") && (compchoice = scissors)){
        console.log("player is winner");
    } else if((playerchoice = "scissors") && (compchoice = paper)) {
        console.log("player is winner");  
    } else if((playerchoice = "paper") && (compchoice = rock)) {
        console.log("player is winner");
    }else {
        console.log("computer is winner");
    }
}
}

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        const playerchoice = icon.getAttribute("id")
        game(playerchoice);
    })
})


 