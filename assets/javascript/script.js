var timeEl = document.querySelector(".time");
var startButton = document.querySelector(".start-button");

var questionOne = ["Which of these is not a common data type in JavaScript?", "Strings", "Booleans", "Numbers", "Timers"];
var questionTwo = ["What does 'this' refer to when used alone?", "The nearest object written in the code", "The JavaScript file", "The global window object", "What the user's mouse is hovering over"];
var questionThree = ["HTML and CSS are capable of creating the same dynamic functunality that JavaScript can."];
var questionFour = ["What keyword do you use to declare a new variable in JavaScript?"];
var questionFive = ["Which of these operators means strictly equals?", "=", "!==", "==", "==="];

function startGame() {
    secondsLeft = 60;
    startTime();
};


function startTime() {
    var timerInterval = setInterval (function () {
        secondsLeft--;
        timeEl.textcontent = "Time: " + secondsLeft;
       
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
          }
      
        }, 1000);
};


startButton.addEventListener("click", startGame);