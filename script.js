// Violet HW Code Quiz
// Declared variables
// var highScore = document.querySelector("#highScore");
// var clear = document.querySelector("#clear");
// var goBack = document.querySelector("#goBack");

// // Event listener to clear scores
// clear.addEventListener("click", function () {
//     localStorage.clear();
//     location.reload();
// });
//-----------------------From Practice Quiz----------------------------

var totalSeconds = 60;
var currentQuestionIndex = 0;
var currentTimeDiv = document.getElementById("currentTime");

setInterval(function () {
  totalSeconds--;
  currentTimeDiv.textContent = totalSeconds;
}, 1000);

function loadQuestion(questionIndex) {
  console.log("clicknextquestion");
  // variable to store the HTML output
  const output = [];

  var currentQuestion = myQuestions[questionIndex];

  // variable to store the list of possible answers
  const answers = [];

  // and for each available answer...
  for (letter in currentQuestion.answers) {
    // ...add an HTML radio button
    answers.push(
      `<label>
            <input type="radio" name="question${currentQuestionIndex}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
    );
  }

  // add this question and its answers to the output
  output.push(
    `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
        <button onclick="loadQuestion(${++currentQuestionIndex})">Next</button>
        
  `
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function buildQuiz() {
  submitButton.style.display = "block";
  document.getElementById("startTime").style.display = "none";

  loadQuestion(currentQuestionIndex);

  // for each question...
  // myQuestions.forEach((currentQuestion, questionNumber) => {
  //   // variable to store the list of possible answers
  //   const answers = [];

  //   // and for each available answer...
  //   for (letter in currentQuestion.answers) {
  //     // ...add an HTML radio button
  //     answers.push(
  //       `<label>
  //               <input type="radio" name="question${questionNumber}" value="${letter}">
  //               ${letter} :
  //               ${currentQuestion.answers[letter]}
  //             </label>`
  //     );
  //   }

  //   // add this question and its answers to the output
  //   output.push(
  //     `<div class="question"> ${currentQuestion.question} </div>
  //           <div class="answers"> ${answers.join("")} </div>`
  //   );
  // });
}

function showResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");
  console.log(quizContainer);
  console.log(answerContainers);

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainers.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = "red";
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
  /* My Questions */
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "What does CSS stand for?",
    answers: {
      a: "Cinnamon Sticky Snacks",
      b: "Creating Style Scope",
      c: "Cascading Style Sheets",
      d: "Cool Slimy Salamanders",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which of the following bring web pages to life by making them interactive? Select one.",
    answers: {
      a: "Javascript",
      b: "HTML",
      c: "CSS",
      d: "YODA",
    },
    correctAnswer: "a",
  },
  {
    question: "Which symbol is used for a strict check?",
    answers: {
      a: "+",
      b: "=",
      c: "==",
      d: "===",
    },
    correctAnswer: "d",
  },
  {
    question:
      "A DOM is: A Document Object Model, in which documents have a logical structure which is very much like a tree.",
    answers: {
      a: "TRUE",
      b: "FALSE",
    },
    correctAnswer: "a",
  },
];

// Kick things off
document.getElementById("startTime").addEventListener("click", buildQuiz);

// Event listeners
submitButton.addEventListener("click", showResults);

/*
  //-------------------------------------------------------------
//   function buildQuiz(){
//     // variable to store the HTML output
//     const output = [];
  
//     // for each question...
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {
  
//         // variable to store the list of possible answers
//         const answers = [];
  
//         // and for each available answer...
//         for(letter in currentQuestion.answers){
  
//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }
  
//         // add this question and its answers to the output
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join('')} </div>`
//         );
//       }
//     );
  
//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
//   }
// // retrieves local storage
// var allScores = localStorage.getItem("allScores");
// allScores = JSON.parse(allScores);

// if (allScores !== null) {

//     for (var i = 0; i < allScores.length; i++) {

//         var createLi = document.createElement("li");
//         createLi.textContent = allScores[i].initials + " " + allScores[i].score;
//         highScore.appendChild(createLi);

//     }
// }
// // Event listener to move to index page
// goBack.addEventListener("click", function () {
//     window.location.replace("./index.html");
// }
// );*/
