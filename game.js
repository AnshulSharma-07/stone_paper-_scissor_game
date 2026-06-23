let compscore = 0;
let userscore = 0;
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("choice was clicked", userchoice);
    playgame(userchoice);
  });
});

const getcompchoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randindex = Math.floor(Math.random() * 3);
  return option[randindex];
  console.log(randindex);
};
const showwinner = (userwin) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    console.log("you win");
    msg.innerText = "you win";
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    console.log("you lose");
    msg.innerText = "you lose";
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("choice was clicked", userchoice);
  const compchoice = getcompchoice();
  console.log("computer choice is", compchoice);
  msg.innerText = compchoice;

  if (userchoice == compchoice) {
    console.log("it is a draw");
    msg.innerText = "its is a draw";
    msg.style.backgroundColor = "#081b13";
  } else {
    let userwin = true;

    if (userchoice == "rock") {
      userwin = compchoice == "paper" ? false : true;
    } else if (userchoice == "paper") {
      userwin = compchoice == "scissor" ? false : true;
    } else {
      userwin = compchoice == "rock" ? false : true;
    }
    showwinner(userwin);
  }
};
