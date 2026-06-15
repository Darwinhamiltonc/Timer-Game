const playerOneScore = 0;
const playerTwoScore = 0;
const GoalTime = 0;

const ChangeGoalBtn = document.getElementById("change-goal-btn");
const goalTimeElement = document.getElementById("goal-time-num");

const getRandomGoal = (goal) => {
    return  goal = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}

ChangeGoalBtn.addEventListener("click", () => {
    const newGoalTime = getRandomGoal(GoalTime);
    goalTimeElement.textContent = newGoalTime;
});


    