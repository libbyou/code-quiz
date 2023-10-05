var timeEl = document.querySelector(".time");
var startButton = document.querySelector(".start-button");
var submitButton = document.querySelector("#submit")
var initialsInput = document.querySelector("#initials")

var questionsArray = [
    {
        question: "Which of these is not a common data type in JavaScript?",
        answers: {
            a: "Strings",
            b: "Booleans",
            c: "Numbers",
            d: "Timers",
        },
        correctAnswer: "Timers",
    },
    {
        question: "What does 'this' refer to when used alone?",
        answers: {
            a: "The nearest object written in the code",
            b: "The JavaScript file",
            c: "The global window object",
            d: "What the user's mouse is hovering over",
        },
        correctAnswer: "The global window object",
    },
    {
        question: "HTML and CSS are capable of creating the same dynamic functunality that JavaScript can.",
        answers: {
            a: "true",
            b: "false",
        },
        correctAnswer: "false",
    },
    {
        question: "What's the keyword you use to declare a new variable in JavaScript?",
        answers: {
            a: "var",
            b: "for",
            c: "function",
            d: "console.log",
        },
        correctAnswer: "var",
    },
    {
        question: "Which of these operators means strictly equals?",
        answers: {
            a: "=",
            b: "!==",
            c: "==",
            d: "===",
        },
        correctAnswer: "===",
    },
];


function startGame() {
    startTime();
    askQuestions();
    startButton.classList.add("hidden");
};

var secondsLeft = 60;

function startTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft == 0) {
            clearInterval(timerInterval);
            gameOver()
        }
        if (i == questionsArray.length) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

var i = 0

function askQuestions() {
    console.log(questionsArray[i].question);
    var question = questionsArray[i].question;
    var stringIndexQs = i.toString();
    var questionDiv = ("question-" + stringIndexQs);
    console.log(questionDiv)
    var parentDiv = document.getElementById(questionDiv)
    var questionContainer = document.querySelector(".asked-question")
    console.log(questionContainer)
    questionContainer.textContent = question

    console.log(questionsArray[i].answers["a"]);
    var optionA = questionsArray[i].answers["a"];
    console.log("this is the console log for option A", optionA)
    console.log(questionsArray[i].answers["b"]);
    var optionB = questionsArray[i].answers["b"];

    console.log(questionsArray[i].answers["c"]);
    var optionC = questionsArray[i].answers["c"];

    console.log(questionsArray[i].answers["d"]);
    var optionD = questionsArray[i].answers["d"];

    var firstChoice = document.getElementById("buttonOne")
    console.log("Choice One", firstChoice)
    firstChoice.textContent = optionA
    firstChoice.addEventListener("click", nextQuestion)

    var secondChoice = document.getElementById("buttonTwo")
    console.log("Choice Two", secondChoice)
    secondChoice.textContent = optionB
    secondChoice.addEventListener("click", nextQuestion);

    var thirdChoice = document.getElementById("buttonThree")
    console.log("Choice Three", thirdChoice)
    thirdChoice.textContent = optionC
    thirdChoice.addEventListener("click", nextQuestion)

    var fourthChoice = document.getElementById("buttonFour")
    console.log("Choice Four", fourthChoice)
    fourthChoice.textContent = optionD
    fourthChoice.addEventListener("click", nextQuestion);
};


function nextQuestion(event) {
    var clickedButton = event.target;
    if (clickedButton.textContent !== questionsArray[i].correctAnswer) {
        secondsLeft = secondsLeft - 10;
    }
    i++;
    if (i < questionsArray.length) { askQuestions(); }
    else { gameOver() };
}

function gameOver() {
    var gameOverPage = document.getElementById("game-over-page")
    gameOverPage.classList.remove("hidden")
    var quizPage = document.getElementById("game-section")
    quizPage.classList.add("hidden");
    var score = document.getElementById("score");
    score.textContent=("Your score is " + secondsLeft);
}

startButton.addEventListener("click", startGame);

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var initials = initialsInput.value;

    window.location.href = "./assets/high scores/index.html";

    localStorage.setItem("initials", initials);
    localStorage.setItem("score", secondsLeft);
})
