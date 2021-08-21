var startButton = document.getElementById('startEl');
var nextButton = document.getElementById('nextEl');
var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answerChoice');

var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");

let shuffleQuestions, currentQuestionIndex

// start the game
startButton.addEventListener('click', startGame);
startButton.addEventListener("click", setTime);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++ ;
    nextQuestion ();
});


function startGame () {
    window.alert("Take this quiz and let's find out. You will have 30 seconds to answer 5 questions. Save your highscore and see who ends up on the top!");
    // hiding the start button and showing the question box

    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;

    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    if (i === questions.length) {
        questionEnder();
    }
    else {
        questionEl.textContent = questions[i]["title"];
        answerOne.textContent = questions[i]["choices"][0];
        answerTwo.textContent = questions[i]["choices"][1];
        answerThree.textContent = questions[i]["choices"][2];
        answerFour.textContent = questions[i]["choices"][3];
    }

    nextQuestion ();
}

// clicking the next button to get the next question

function nextQuestion () {
    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;

    startButton.hidden = true;
    if (i === questions.length) {
        questionEnder();
    }
    else {
        questionEl.textContent = questions[i]["title"];
        answerOne.textContent = questions[i]["choices"][0];
        answerTwo.textContent = questions[i]["choices"][1];
        answerThree.textContent = questions[i]["choices"][2];
        answerFour.textContent = questions[i]["choices"][3];
    }
    
}

function showQuestion (question) {
    // gets and shows the question in the html
    questionEl.innerText = question.question ;
    questions.answer.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button-styling');
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }   
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

// function resetState () {
//     nextButton.classList.add('hide');
//     while (answerEl.firstChild) {
//         answerEl.removeChild
//         (answerEl.firstChild)
//     }
// }


// setting up the answering to decide whether the question was answered correctly or incorrectly
answerOne.addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        window.alert("Correct!");
        score++;
    }
    else {
        window.alert("Wrong!");
    }
    i++;
    nextQuestion();
})

answerTwo.addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        window.alert("Correct!");
        score++;
    }
    else {
        window.alert("Wrong!");
    }
    i++;
    nextQuestion();
})

answerThree.addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        window.alert("Correct!");
        score++;
    }
    else {
        window.alert("Wrong!");
    }
    i++;
    nextQuestion();
})

answerFour.addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        window.alert("Correct!");
        score++;
    }
    else {
        window.alert("Wrong!");
    }
    i++;
    nextQuestion();
})

function setStatusClass () {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function questionEnder() {

    var scoreTag = document.createElement("h1");
    var inputTag = document.createElement("input");
    var submitButton = document.createElement("button");
    score += secondsLeft * .1;
    score = score.toFixed(2);
    document.getElementById("question").textContent = "All Done!";
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score: " + score;
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton);
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = score;
        storeScores(highScoreText);
        window.location.href = "highScores.html";
    });
}

var questions= [
    {
      title: "What is HTML responsible for?",
      choices: ['happiness', 'making a website look pretty', 'nothing', 'the structure and content'],
      answer: 'the structure and content'
    },
    {
       title: "this is another question?",
       choices: ['an answer', 'yup', 'I am running out of time', 'nope'],
       answer: 'nope'
    },
      
    
]

// // selecting one of the four answer choices
// function selectAnswer () {

// Setting up the timer using timer interval for 60 seconds to answer the 5 questions
var timer = document.getElementById('timer');

var i = 0;
var score = 0;
var secondsLeft = 60;
var storedScores;
var scoreList = [];

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    // return (score)
}

