
let player1Score = 0
let player2Score = 0
let play1Turn = true
//const contestants = ['CONTESTANT #1', 'CONTESTANT #2']
const winnerScore = 4

//here//
//let player1Scoreboard = documnet.getElementById('player1Scoreboard')
//let player2Scoreboard = documnet.getElementById('player2Scoreboard')
//end here//


let startButton = document.getElementById('startButn');
let nextButton = document.getElementById('nextButn');
let questionContainer = document.getElementById('triviaContainer');
let playerScore = document.getElementById('playerContainer');

let questionElement = document.getElementById('question');
let answerButnElement =  document.getElementById('answerButton');
let shuffledQuestions, currentQuestionIndex 
////////////////////////////////////////////////////////////////////////////////////////

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
})

function startGame() {
console.log('start');
startButton.classList.add('hide');
shuffledQuestions = trivia.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainer.classList.remove('hide')
playerScore.classList.remove('hide')
message.classList.remove('hide');
setNextQuestion()
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
    

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButnElement.appendChild(button)
    })

}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButnElement.firstChild) {
        answerButnElement.removeChild
        (answerButnElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target //whatever is clicked
    const correct = selectedButton.dataset.correct;

//here//

 
    if (correct) {
        alert('You got it! Answer the next question!');

        
    } else {
        
        alert('Sorry, that is not the right answer. Next player takes a turn!')
        message.textContent = "CONTESTANT #2, GO!";
        

    }if (shuffledQuestions.length > currentQuestionIndex + 1)    {}
 
    nextButton.classList.remove('hide')
    
 
}



const trivia = [
    {
        question: "In the Marvel Cinematic Unvierse, which character is played by Tom Holland?",
        answers: [
            {text: 'Batman', correct: false },
            {text: 'Spider-Man', correct: true },
            {text: 'Thor', correct: false },
            {text: 'Captain America', correct: false },
            {text: 'Iron Man', correct: false},
            {text: 'Mickey Mouse', correct: false}
        ]
    },
    {
        question: "Which of these quotes is from the film 'Jaws'?",
        answers: [
            {text: "\"Toto, I've a feeling we're not in Kansas anymore.\"", correct: false },
            {text: "\"Here's Johnny!\"", correct: false },
            {text: "\"Houston, we have a problem.\"", correct: false },
            {text: "\"I'll be back.\"", correct: false },
            {text: "\“I'm the king of the world!\"", correct: false},
            {text: "\"You're gonna need a bigger boat.\"", correct: true}
        ]
    },
    {
        question: "What was Cotton Candy's original name?",
        answers: [
            {text: "Sugar Cloud", correct: false },
            {text: "Sugar Puff", correct: false },
            {text: "Beehive", correct: false },
            {text: "Bird's Nest", correct: false },
            {text: "Fairy Floss", correct: true},
            {text: "Hairball", correct: false}
        ]
    },
    {
        question: "Singer, Lizzo, plays which instrument?",
        answers: [
            {text: "Flute", correct: true },
            {text: "Violin", correct: false },
            {text: "Drums", correct: false },
            {text: "Harp", correct: false },
            {text: "Electric Guitar", correct: false},
            {text: "The Triangle", correct: false}
        ]
    },
    {
        question: "What is the only food that never expires?",
        answers: [
            {text: "Bananas", correct: false },
            {text: "Cereal", correct: false },
            {text: "Honey", correct: true },
            {text: "Lasagna", correct: false },
            {text: "Ketchup", correct: false},
            {text: "Ice Cream", correct: false}
        ]
    },
    {
        question: "Which rock star wrote and directed the 2007 movie, 'Halloween'?",
        answers: [
            {text: "Rob Zombie", correct: true },
            {text: "Kurt Cobain", correct: false },
            {text: "Freddie Mercury", correct: false },
            {text: "Slash", correct: false },
            {text: "Machine Gun Kelly", correct: false},
            {text: "Mick Jagger", correct: false}
        ]
    },
    {
        question: "Which flavor is used to make the marshmallow candy 'Circus Peanuts?'",
        answers: [
            {text: "Roasted peanuts", correct: false },
            {text: "Chocolate", correct: false },
            {text: "Brown sugar & cinnamon", correct: false },
            {text: "Banana", correct: true },
            {text: "Wild berry", correct: false},
            {text: "Orange", correct: false}
        ]
    },
]

