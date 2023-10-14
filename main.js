let currentQuestion, correctAnswers, attempts, maxAttempts;

function startGame() {
    document.getElementById("message").innerText = "Ok, let's start. I will start by 2 digit numbers, so good luck!";
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("score-container").classList.add("hidden");
    correctAnswers = 0;
    attempts = 0;
    maxAttempts = 3;
    nextQuestion();
}

function generateQuestion() {
    const x = Math.floor(Math.random() * 91) + 10;
    const y = Math.floor(Math.random() * 91) + 10;
    const operations = ["+", "/", "-", "*"];
    const z = operations[Math.floor(Math.random() * operations.length)];
    currentQuestion = { x, y, z };
    return `${x} ${z} ${y}`;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("user-answer").value);
    const answer = eval(`${currentQuestion.x} ${currentQuestion.z} ${currentQuestion.y}`);
    
    attempts++;
    const resultElement = document.getElementById("result");
    const nextQuestionBtn = document.getElementById("next-question-btn");

    if (userAnswer === answer) {
        resultElement.innerText = "Congrats, keep it up!";
        correctAnswers++;
        nextQuestionBtn.classList.remove("hidden");
    } else {
        resultElement.innerText = `Oh, you should try again. (Attempt: ${attempts}, Correct: ${correctAnswers})`;
        nextQuestionBtn.classList.add("hidden");
        showScore();
    }
    
    if (attempts >= maxAttempts) {
        showScore();
    }
}

function nextQuestion() {
    document.getElementById("question").innerText = generateQuestion();
    document.getElementById("user-answer").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("next-question-btn").classList.remove("hidden");
}

function showScore() {
    const questionContainer = document.getElementById("question-container");
    const scoreContainer = document.getElementById("score-container");
    const scoreMessage = `You answered ${correctAnswers} out of ${attempts} questions correctly.`;
    document.getElementById("score").innerText = scoreMessage;

    questionContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
}

function startNew() {
    const questionContainer = document.getElementById("question-container");
    const scoreContainer = document.getElementById("score-container");

    questionContainer.classList.remove("hidden");
    scoreContainer.classList.add("hidden");
    
    correctAnswers = 0;
    attempts = 0;
    startGame();
}
