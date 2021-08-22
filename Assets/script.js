// global variables listed
var startButton = document.getElementById('startEl');
var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answerChoice');

var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");

var correctAnswers = 0;

var timer = document.getElementById('timer');

var i = 0;
var secondsLeft = 30;

var questions= [
    {
      title: "What is HTML responsible for?",
      choices: ['happiness', 'making a website look pretty', 'nothing', 'the structure and content'],
      answer: 'the structure and content'
    },
    {
       title: "this is another question?",
       choices: ['an answer', 'yup', 'I am running out of time', 'nope'],
       answer: 'yup'
    },
    {
        title: "I don't feel like writing another question so click the third option?",
        choices: ['do not dare', 'noooo', 'pick me', 'nope'],
        answer: 'pick me'
     },
     {
        title: "Who created this quiz",
        choices: ['Jacob', 'a ghost', 'a cat', 'Lydia'],
        answer: 'Lydia'
     },
]

// start the game
startButton.addEventListener('click', startGame);
startButton.addEventListener("click", setTime);


// give the rules to the game and hide the start button
function startGame () {
    window.alert("Take this quiz and let's find out. You will have 30 seconds to answer 4 questions. You will see your score at the end of the game out of 4 possible points. Save and inital your score at the end. Don't forget that if you get an answer wrong then your time will be reduced as a penalty.");

    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide');

    nextQuestion ();
}

// will bring you to the next question
function nextQuestion () {
    if (i === questions.length) {
        gameEnder();
    }
    else {
        questionEl.textContent = questions[i]["title"];
        answerOne.textContent = questions[i]["choices"][0];
        answerTwo.textContent = questions[i]["choices"][1];
        answerThree.textContent = questions[i]["choices"][2];
        answerFour.textContent = questions[i]["choices"][3];
    }
}

// setting up the answering to decide whether the question was answered correctly or incorrectly
answerOne.addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        window.alert("Correct!");
        correctAnswers++;
    }
    else {
        window.alert("Wrong and you are penalized in time");
        secondsLeft--;
    }
    i++;
    nextQuestion();
})

answerTwo.addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        window.alert("Correct!");
        correctAnswers++;
    }
    else {
        window.alert("Wrong and you are penalized in time!");
        secondsLeft--;
    }
    i++;
    nextQuestion();
})

answerThree.addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        window.alert("Correct!");
        correctAnswers++;
    }
    else {
        window.alert("Wrong and you are penalized in time!");
        secondsLeft--;
    }
    i++;
    nextQuestion();
})

answerFour.addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        window.alert("Correct!");
        correctAnswers++;
    }
    else {
        window.alert("Wrong and you are penalized in time!");
        secondsLeft--;
    }
    i++;
    nextQuestion();
})

function gameEnder() {
    // hide the remaining answers when showing the score
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();

    // defining the local variables
    var scoreTag = document.createElement("h1");
    var createTag = document.createElement("input");
    var createButton = document.createElement("button");

    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score: " + correctAnswers + "/4";
   
}


// Setting up the timer using timer interval for 60 seconds to answer the 5 questions
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Out of Time, Try again by refreshing the page!");
            gameEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

// // saving score to local storage in a list (hopefully)
// function saveScore(score, highScores) {
//     const name = prompt('Please enter your initals');
//     const newScore = { score, name };
    
//     // 1. Add to list
//     highScores.push(newScore);
  
//     // 2. Sort the list
//     highScores.sort((a, b) => b.score - a.score);
    
//     // 3. Select new list
//     highScores.splice(NO_OF_HIGH_SCORES);
    
//     // 4. Save to local storage
//     localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
//   };

