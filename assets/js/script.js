// The Questions and Answers
var quizQuestions = [
    {
        question: "Which company produces the 'Model S' electric car?",
        options: ["Nissan", "BMW", "Tesla", "Ford"],
        answer: "Tesla",
    },
    {
        question: "What does 'BMW' stand for?",
        options: [
            "Bavarian Motor Works",
            "British Motor Works",
            "Berlin Motor Works",
            "Brussels Motor Works",
        ],
        answer: "Bavarian Motor Works",
    },
    {
        question: "In what year was the first modern car invented?",
        options: ["1886", "1901", "1879", "1895"],
        answer: "1886",
    },
    {
        question: "Which car is known as the first mass-produced vehicle?",
        options: [
            "Chevrolet Impala",
            "Ford Model T",
            "Volkswagen Beetle",
            "Honda Civic",
        ],
        answer: "Ford Model T",
    },
    {
        question: "What does the term 'SUV' stand for?",
        options: [
            "Superior Urban Vehicle",
            "Special Utility Van",
            "Sport Utility Vehicle",
            "Speedy Urban Van",
        ],
        answer: "Sport Utility Vehicle",
    },
    {
        question: "Which country is Lamborghini originally from?",
        options: ["Italy", "Germany", "United States", "France"],
        answer: "Italy",
    },
    {
        question:
            "What is the main purpose of antilock braking system (ABS) in cars?",
        options: [
            "Increase speed",
            "Decrease fuel consumption",
            "Prevent skidding during braking",
            "Cool down the engine",
        ],
        answer: "Prevent skidding during braking",
    },
    {
        question: "Which company is known for producing the '911' model?",
        options: ["Mercedes-Benz", "Audi", "Porsche", "Ferrari"],
        answer: "Porsche",
    },
    {
        question: "In which country was the car brand Volvo founded?",
        options: ["Sweden", "Denmark", "Norway", "Finland"],
        answer: "Sweden",
    },
    {
        question: "What is the unit 'horsepower' used to measure?",
        options: ["Engine efficiency", "Fuel consumption", "Engine power", "Speed"],
        answer: "Engine power",
    },
];

var currentQuestionIndex = 0;
var score = 0;

function loadQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById("questions").textContent = currentQuestion.question;

    var optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(function (option) {
        var optionDiv = document.createElement("div");
        optionDiv.textContent = option;
        optionDiv.onclick = function () {
            checkAnswer(option);
        };
        optionsContainer.appendChild(optionDiv);
    });

    // Clear feedback
    document.getElementById("feedback").textContent = "";
}

function checkAnswer(selectedOption) {
    // Prevents answering if the Quiz has ended
    if (currentQuestionIndex >= quizQuestions.length) {
        return;
    }

    var currentQuestion = quizQuestions[currentQuestionIndex];
    var optionsDivs = document.getElementById("options").children;

    for (var i = 0; i < optionsDivs.length; i++) {
        var optionDiv = optionsDivs[i];
        if (optionDiv.textContent === selectedOption) {
            // Background color of the selected option
            optionDiv.style.backgroundColor = "rgba(251, 155, 29, 0.74)";

            if (selectedOption === currentQuestion.answer) {
                score++;
            }

            // No more answering once an option is selected
            for (var j = 0; j < optionsDivs.length; j++) {
                optionsDivs[j].onclick = null;
            }

        } else {
            optionDiv.style.backgroundColor = "rgba(211, 211, 211, 0.404)";
        }
    }
}

function loadNextQuestion() {
    // Check if Quiz ended
    if (currentQuestionIndex >= quizQuestions.length - 1) {
        endQuiz();
        return;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function endQuiz() {
    // Quiz End
    var finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = "Quiz finished! Your score: " + score + "/" + quizQuestions.length;
    finalScoreElement.style.color = "white";
    document.getElementById("retry-button").style.display = "";
    document.getElementById("next-button").style.display = "none";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("final-score").textContent = "";
    document.getElementById("retry-button").style.display = "none";
    loadQuestion();
    document.getElementById("game-container").style.display = "";
    document.getElementById("next-button").style.display = "";
}

loadQuestion();
