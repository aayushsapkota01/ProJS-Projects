document.addEventListener("DOMContentLoaded", () => {
  // Buttons
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

  //   Containers
  const questionContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result-container");

  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const scoreDisplay = document.getElementById("score");

  const quizQuestions = [
    {
      question: "What is the capital city of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "Mark Twain", "Jane Austen", "Ernest Hemingway"],
      answer: "Harper Lee",
    },
    {
      question: "What is the smallest unit of life in biology?",
      choices: ["Atom", "Molecule", "Cell", "Organ"],
      answer: "Cell",
    },
    {
      question: "Which is the largest mammal?",
      choices: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    {
      question: "What is the square root of 144?",
      choices: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question:
        "Which programming language is primarily used for web development?",
      choices: ["Python", "JavaScript", "C++", "Java"],
      answer: "JavaScript",
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Michelangelo",
        "Pablo Picasso",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the chemical symbol for water?",
      choices: ["O2", "H2O", "CO2", "NaCl"],
      answer: "H2O",
    },
    {
      question: "Which country hosted the 2020 Summer Olympics (held in 2021)?",
      choices: ["China", "Brazil", "Japan", "Australia"],
      answer: "Japan",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = quizQuestions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; // clear prev choices
    quizQuestions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${quizQuestions.length}`;
  }

  function selectAnswer(choice) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;

    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }
});
