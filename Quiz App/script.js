// create a quiz app of 10 random mcq type questions.
// next button click -> next question...
// each question should be display for 60 second.
// after 60 second it should be change to next question.
// count user's mark while attempting test and show at the end of quiz.
// and show excellent, good, average, poor result based on mark.

// question bank - 10

const questionsList = [
  {
    question: "What is the capital city of France?",
    options: ["Madrid", "Berlin", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: 3,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: 0,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Fe", "Au", "Pb"],
    answer: 2,
  },
  // {
  //   question: "Which country is home to the kangaroo?",
  //   options: ["South Africa", "Australia", "Brazil", "New Zealand"],
  //   answer: 1,
  // },
  // {
  //   question: "How many continents are there on Earth?",
  //   options: ["5", "6", "7", "8"],
  //   answer: 2,
  // },
  // {
  //   question: "What is the hardest natural substance on Earth?",
  //   options: ["Diamond", "Quartz", "Granite", "Titanium"],
  //   answer: 0,
  // },
  // {
  //   question: "Which gas do plants primarily absorb during photosynthesis?",
  //   options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"],
  //   answer: 3,
  // },
  // {
  //   question: "Who painted the Mona Lisa?",
  //   options: [
  //     "Vincent van Gogh",
  //     "Leonardo da Vinci",
  //     "Pablo Picasso",
  //     "Claude Monet",
  //   ],
  //   answer: 1,
  // },
];

const question_index = document.getElementById("question-index");
const question = document.getElementById("question");

const option_A_text = document.getElementById("option-a-text");
const option_B_text = document.getElementById("option-b-text");
const option_C_text = document.getElementById("option-c-text");
const option_D_text = document.getElementById("option-d-text");

const option_A_btn = document.getElementById("option-a-btn");
const option_B_btn = document.getElementById("option-b-btn");
const option_C_btn = document.getElementById("option-c-btn");
const option_D_btn = document.getElementById("option-d-btn");

const timer_counter = document.getElementById("timer-count");
const next_question_btn = document.getElementById("next-question-btn");

const start_quiz_btn = document.getElementById("start-btn");
const quiz_container = document.getElementById("quiz-container");

let currentQuestionIndex = -1;
let timerId = 0;

const displayQuestion = () => {
  // mark calculation & quiz end on last question
  if (currentQuestionIndex >= questionsList.length - 1) {
    alert("Quiz Ended !");
    return;
  }

  // timer and next question after timer end.
  let seconds = 10;
  timerId = setInterval(() => {
    timer_counter.textContent = seconds;
    if (seconds > 0) {
      seconds--;
    } else {
      clearInterval(timerId);
      displayQuestion();
    }
  }, 1000);

  // display question by currentQuestionIndex
  currentQuestionIndex++;
  question_index.textContent = "Q-" + (currentQuestionIndex + 1);
  question.textContent = questionsList[currentQuestionIndex].question;
  option_A_text.textContent = questionsList[currentQuestionIndex].options[0];
  option_B_text.textContent = questionsList[currentQuestionIndex].options[1];
  option_C_text.textContent = questionsList[currentQuestionIndex].options[2];
  option_D_text.textContent = questionsList[currentQuestionIndex].options[3];
};

// pending

// next question display on click and previous timer clear and restart
next_question_btn.addEventListener("click", () => {
  clearInterval(timerId);
  displayQuestion();
});

// to display first question without any click and start timer.
displayQuestion();

// start quiz btn
start_quiz_btn.addEventListener("click", () => {
  quiz_container.className = "container";
  start_quiz_btn.className = "d-none";
});
