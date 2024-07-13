const choices = ["rock", "paper", "scissor"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerid = document.getElementById("playerid");
const Computerid = document.getElementById("Computerid");

let playerscore = 0;
let computerscore = 0;

function playgame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerchoice === computerchoice) {
        result = "It's a tie!";
    } else {
        switch (playerchoice) {
            case "rock":
                result = (computerchoice === "paper") ? "You lost" : "You win";
                break;
            case "paper":
                result = (computerchoice === "scissor") ? "You lost" : "You win";
                break;
            case "scissor":
                result = (computerchoice === "rock") ? "You lost" : "You win";
                break;
        }
    }

    playerdisplay.textContent = `Player: ${playerchoice}`;
    computerdisplay.textContent = `Computer: ${computerchoice}`;
    resultdisplay.textContent = result;

    if (result === "You win") {
        playerscore++;
        playerid.textContent = playerscore;
        resultdisplay.classList.remove("red-text");
        resultdisplay.classList.add("green-text");
    } else if (result === "You lost") {
        computerscore++;
        Computerid.textContent = computerscore;
        resultdisplay.classList.remove("green-text");
        resultdisplay.classList.add("red-text");
    } else {
        resultdisplay.classList.remove("green-text", "red-text");
    }
}
