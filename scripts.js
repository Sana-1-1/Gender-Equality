// Array for quiz questions
const questions = [
    {
        question: "What percentage of women make up the global workforce?",
        answers: ["39%", "50%", "60%", "70%"],
        correct: "39%"
    },
    {
        question: "How many girls are out of school worldwide?",
        answers: ["32 million", "50 million", "130 million", "250 million"],
        correct: "130 million"
    },
    {
        question: "What is the percentage of women in national parliaments?",
        answers: ["10%", "20%", "25%", "30%"],
        correct: "25%"
    },
    {
        question: "What percentage of women experience physical or sexual violence?",
        answers: ["1 in 2", "1 in 3", "1 in 4", "1 in 5"],
        correct: "1 in 3"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    showQuestion();
}

// Function to display the current question
function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    questionData.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => checkAnswer(answer);
        answersDiv.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(answer) {
    const questionData = questions[currentQuestionIndex];
    if (answer === questionData.correct) {
        score++;
    }
    nextQuestion();
}

// Function to move to the next question or show the result
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Function to display the result
function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerText = `Your score: ${score}/${questions.length}`;
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
        // Here you can add code to send the form data to a server or email service
        document.getElementById('contact-form').reset(); // Reset the form after submission
    } else {
        alert('Please fill out all fields.');
    }
});
