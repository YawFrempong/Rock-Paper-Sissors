var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
main();

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const pick = Math.floor(Math.random() * 3);
  return choices[pick];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserText = "user".fontsize(3).sub();
  const smallComputerText = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice}${smallUserText} beats ${computerChoice}${smallComputerText}. You win!`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 300)
}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserText = "user".fontsize(3).sub();
  const smallComputerText = "comp".fontsize(3).sub();
  result_p.innerHTML = `${computerChoice}${smallComputerText} beats ${userChoice}${smallUserText}. You lose!`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 300)
}
function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserText = "user".fontsize(3).sub();
  const smallComputerText = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice}${smallUserText} cancels out ${computerChoice}${smallComputerText}. Draw!`;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow')}, 300)
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}
function main() {
  rock_div.addEventListener('click', function() {
    game("rock");
  })

  paper_div.addEventListener('click', function() {
    game("paper")
  })

  scissors_div.addEventListener('click', function() {
    game("scissors")
  })
}
