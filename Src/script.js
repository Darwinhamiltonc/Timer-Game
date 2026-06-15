const playerOneScore = 0;
const playerTwoScore = 0;
const GoalTime = 0;

const ChangeGoalBtn = document.getElementById("ChangeGoalBtn");
const getRandomGoal = (goal) => {
    return  goal = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}

addEventListener("click", () => {
    console.log(getRandomGoal(GoalTime));
});


console.log(getRandomGoal(GoalTime));
    