var container = document.querySelector("#container");
var starter = document.querySelector("#start")
var quizzer = document.querySelector("#quiz")
var results = document.querySelector("#results")

function showState() {
    if(state === "start") {
        starter.style.display = 'block';
        quizzer.style.display = 'none';
        results.style.display = 'none';
    }
    if(state === "quiz") {
        starter.style.display = 'block';
        quizzer.style.display = 'block';
        results.style.display = 'none';
        displayQuestion();
    }
    if(state === "results") {
        starter.style.display = 'none';
        quizzer.style.display = 'none';
        results.style.display = 'block';
    }
};

function init() {
    showState();
};