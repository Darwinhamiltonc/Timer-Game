let playerOneScore = 0;
let playerTwoScore = 0;
let GoalTime = 0;
let playerOneTimer = 0;
let playerTwoTimer = 0;
let interval = null;

const ChangeGoalBtn = document.getElementById("change-goal-btn");
const goalTimeElement = document.getElementById("goal-time-num");
const playerOneStopBtn = document.getElementById("player-one-stop-btn");
const playerTwoStopBtn = document.getElementById("player-two-stop-btn");
const playerOneTimerElement = document.querySelector(".timer-one");
const playerTwoTimerElement = document.querySelector(".timer-two");
const playerOneResetBtn = document.querySelector(".player-one-reset-btn");
const playerTwoResetBtn = document.querySelector(".player-two-reset-btn");

const getRandomGoal = (goal) => {
    return  goal = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}



playerOneStopBtn.addEventListener("click", () => {
  if (interval === null) {
    interval = setInterval(() => {
        playerOneTimer++;
      playerOneTimerElement.textContent = playerOneTimer;
    }, 1000);

    playerOneStopBtn.textContent = "Stop";
  } else {
    clearInterval(interval);
    interval = null;

    playerOneStopBtn.textContent = "Start";
  }
}
);


playerTwoStopBtn.addEventListener("click", () => {
  if (interval === null) {
    interval = setInterval(() => {
        playerTwoTimer++;
      playerTwoTimerElement.textContent = playerTwoTimer;
    }, 1000);

    playerTwoStopBtn.textContent = "Stop";
  } else {
    clearInterval(interval);
    interval = null;

    playerTwoStopBtn.textContent = "Start";
  }
}
);

playerOneResetBtn.addEventListener("click", () => {
    playerOneTimer = 0;
    playerOneTimerElement.textContent = playerOneTimer;
});

playerTwoResetBtn.addEventListener("click", () => {
    playerTwoTimer = 0;
    playerTwoTimerElement.textContent = playerTwoTimer;
});

ChangeGoalBtn.addEventListener("click", () => {
     GoalTime = getRandomGoal(GoalTime);
    goalTimeElement.textContent = GoalTime;
});


    