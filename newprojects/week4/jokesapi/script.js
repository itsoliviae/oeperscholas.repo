
    //const button = document.getElementById('JOD');
    //button.addEventListener('click', () => {


//document.createElement("button")

fetch('https://api.jokes.one/jod')
.then(res => res.json())
.then(jokeData => {
    console.log(jokeData);
    const jokeOfDay = jokeData.contents.jokes[0].joke.text;
    // console.log(jokeOfDay);
    const jodButton = document.getElementById('JOD');
    jodButton.addEventListener('click', () => {
        const jodText = document.getElementById('toast');
        jodText.innerHTML = jokeOfDay;
        if (jodText.style.display === "none") {
            jodText.className = "show";
            jodText.style.display = "block";
        }
        else {
            jodText.className = "";
            jodText.style.display = "none";
        }
        });
        
    });


const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const rjodButton = document.getElementById('RJOD');
rjodButton.addEventListener('click', () => {
fetch(url)
.then(res => res.json())
.then(randomJokeData => {
    console.log(randomJokeData);
    const randomJoke = randomJokeData.joke;
       const rjodText = document.getElementById('random-toast');
       rjodText.innerHTML = randomJoke;
       if(rjodText.style.display === "none") {
        rjodText.className = "show";
        rjodText.style.display = "block";
       }
       else {
        rjodText.className = "";
        rjodText.style.display = 'none';
       }
    });

})
