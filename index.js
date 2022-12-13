var readlineSync = require("readline-sync");

var score = 0;

function welcome(){
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " Do you know AMAN?");
}

var questionOne = {
  question: "Where is my hometown? ",
  answer: "Muzaffarpur"
}

var questionTwo = {
  question: "What is my nickname? ",
  answer: "Rishu"
}

var questionThree = {
  question: "Where do I study? ",
  answer: "BIT Mesra"
}

var questionFour = {
  question: "My favorite superhero would be? ",
  answer: "Ironman"
}

var questionFive = {
  question: "My favorite color would be? ",
  answer: "Blue"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];


function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("You are right!")
    score = score + 1;
  }else{
    console.log("You are wrong!")
  }

  console.log("Current score: ",score);
  console.log("---------------------")
}

function game(){
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

welcome();
game();