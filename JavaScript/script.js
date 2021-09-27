let userMove = null;
let computerMove = null;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let result = document.getElementById("result");
let computerScore = document.getElementById("computer-score");
let computerScoreVal = 0;
let userScore = document.getElementById("user-score");
let userScoreVal = 0;

function valueToComputer() {
  let computerRan = 0.5 + (3.49 - 0.5) * Math.random();
  let computerRandom = Math.round(computerRan);
  if (computerRandom === 1) {
    computerMove = "rock";
  } else if (computerRandom === 2) {
    computerMove = "paper";
  } else if (computerRandom === 3) {
    computerMove = "scissor";
  }
  console.log(computerRandom);
  console.log(computerMove);
}
function resultColor() {
  if (result.innerHTML === "Win") {
    result.style.background = "#04d004d6";
  } else if (result.innerHTML === "Defeat") {
    result.style.background = "#ff1414b3";
  } else if (result.innerHTML === "Tie") {
    result.style.background = "#0808f1b8";
  }
}
function scoreColor() {
  if (userScoreVal === computerScoreVal) {
    userScore.style.borderColor = "#0808f1b8";
    computerScore.style.borderColor = "#0808f1b8";
  } else if (userScoreVal > computerScoreVal) {
    userScore.style.borderColor = "#04d004d6";
    computerScore.style.borderColor = "#ff1414b3";
  } else if (userScoreVal < computerScoreVal) {
    userScore.style.borderColor = "#ff1414b3";
    computerScore.style.borderColor = "#04d004d6";
  }
}
function theGame() {
  valueToComputer();
  function matchUp() {
    rock.addEventListener("click", () => {
      userMove = "rock";
      if (userMove === computerMove) {
        result.innerHTML = "Tie";
      } else if (computerMove === "paper") {
        result.innerHTML = "Defeat";
        computerScoreVal++;
        computerScore.innerHTML = computerScoreVal;
      } else if (computerMove === "scissor") {
        result.innerHTML = "Win";
        userScoreVal++;
        userScore.innerHTML = userScoreVal;
      }
      resultColor();
      scoreColor();
      valueToComputer();
    });
    paper.addEventListener("click", () => {
      userMove = "paper";
      if (userMove === computerMove) {
        result.innerHTML = "Tie";
      } else if (computerMove === "scissor") {
        result.innerHTML = "Defeat";
        computerScoreVal++;
        computerScore.innerHTML = computerScoreVal;
      } else if (computerMove === "rock") {
        result.innerHTML = "Win";
        userScoreVal++;
        userScore.innerHTML = userScoreVal;
      }
      resultColor();
      scoreColor();
      valueToComputer();
    });
    scissor.addEventListener("click", () => {
      userMove = "scissor";
      if (userMove === computerMove) {
        result.innerHTML = "Tie";
      } else if (computerMove === "rock") {
        result.innerHTML = "Defeat";
        computerScoreVal++;
        computerScore.innerHTML = computerScoreVal;
      } else if (computerMove === "paper") {
        result.innerHTML = "Win";
        userScoreVal++;
        userScore.innerHTML = userScoreVal;
      }
      resultColor();
      scoreColor();
      valueToComputer();
    });
  }
  matchUp();
}
theGame();
