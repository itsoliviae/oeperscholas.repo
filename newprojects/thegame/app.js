//console.log('hello');
/*
let triviaContainerElement = document.getElementById('triviaContainer')
function nextQuestion () {

}

function selectAnswer () {

}
*/





fetch('https://the-trivia-api.com/api/questions?categories=food_and_drink,film_and_tv&limit=5&region=US&difficulty=easy');
.then(res => res.json())
.then(question => {
    console.log(question);
    const triviaQuestions = question.contents.question[0].question.text;
    const triviaOne = document.getElementById('btn');
    triviaOne.innerHTML = triviaQuestions;
    