// constant variables that will that inner HTML will be taken from //
const start = document.getElementById("start");
const quiz = document.getElementById("quizarea");
const question = document.getElementById("question");
const answercount = document.getElementById("answercount");
const scoreContainer = document.getElementById("scoreContainer");


const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");

let questions = [{
        question: 'Who has won the most premier league titles?',
        choice1: 'manchester city',
        choice2: 'Manchester united',
        choice3: 'chelsea',
        choice4: 'Arsenal',
        answer: 'Manchester united',
    },
    {
        question: 'Who has won the most champions league titles?',
        choice1: 'Barcelona',
        choice2: 'Manchester united',
        choice3: 'Real Madrid',
        choice4: 'Bayern Munich',
        answer: 'Real Madrid',
    },
    {
        question: 'Who won the golden boot at the 2014 Brazil world cup?',
        choice1: 'Thomas Muller',
        choice2: 'Lionel Messi',
        choice3: 'James Rodriguez',
        choice4: 'Christiano Ronaldo',
        answer: 'James Rodriguez',
    },
    {
        question: 'Who won the 2018 FA Cup?',
        choice1: 'Leicester City',
        choice2: 'Arsenal',
        choice3: 'Liverpool',
        choice4: 'Chelsea',
        answer: 'Chelsea',
    },
    {
        question: 'What is the capcity of Wembley Stadium?',
        choice1: '75,000',
        choice2: '80,000',
        choice3: '85,000',
        choice4: '90,000',
        answer: '90,000',
    },
    {
        question: 'who won the 2019 African cup of nations?',
        choice1: 'Algeria',
        choice2: 'Cameroon',
        choice3: 'Nigeria',
        choice4: 'Egypt',
        answer: 'Algeria',
    },
    {
        question: 'who won the 2021 copa america?',
        choice1: 'Chile',
        choice2: 'Argentina',
        choice3: 'Brazil',
        choice4: 'Uruguay',
        answer: 'Argentina',
    },
    {
        question: 'what player has started the most premier league games?',
        choice1: 'Gareth Barry',
        choice2: 'David beckham',
        choice3: 'James Milner',
        choice4: 'John Terry',
        answer: 'Gareth Barry',
    }
];
// render question//
const lastQuestion = questions.length - 1;
let activequestion = 0;
let score = 0;
let count = 0;

function Questionrender() {
    let quest = questions[activequestion]; 
    questions. = "<p>" + quest.question + "</p>";
    choice1.innerHTML = quest.choice1;
    choice2.innerHTML = quest.choice2;
    choice3.innerHTML = quest.choice3;
    choice4.innerHTML = quest.choice4;
}
// quiz opening //
start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    Questionrender();
    quiz.style.display = "block";
    progressRender();
}
//answer counter //
function progressRender() {
    for (let questIndex = 0; questIndex <= lastQuestion; questIndex++) {
        questions.innerHTML += "<div class='anscount' id=" + questIndex + "></div>";
    }
} //event listener 
const displayquestion = document.querySelectorAll(".choices")
displayquestion.forEach(questions => questions.addEventListener("click", (event) => {
    const question = event.target.dataset.question;
    console.log(question) 
}));


function checkAnswer(answer) {
    if (answer == questions[activequestion].correct) {
        score++;
        answerisCorrect();
    } else {
        answerisincorrect();
    }
    count = 0;
    if (activequestion < lastQuestion) {
        activequestion++;
        activequestion();
    } else {
        start.addEventListener("click", startQuiz);
        scoreRender();
    }
}

//call function that next question//


function answerisCorrect() {
    document.getElementById("activequestion").style.backgroundcolor = "green";
}

function answerisincorrect() {
  document.getElementById("activequestion").style.backgroundcolor = "Red";
};


function scoreRender() {
    scoreContainer.style.display = "block";
    const scorePercent = Math.round(100 * score / questions.length);
    scoreContainer.innerHTML += "<p>" + scorePercent + "%</p>"
}