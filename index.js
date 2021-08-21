var readlineSync = require("readline-sync")
var chalk = require("chalk")

var playerName = readlineSync.question("Enter your name : ");
var score = 0;

console.log(chalk.bgCyan("Welcome " + playerName + " to AVENGERS quiz ! "));

function play(question, answer) {
  var userResponse = readlineSync.question(question);
  if(userResponse.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("Correct"));
    score++;
  } else {
    console.log(chalk.bgRed("Wrong"));
  }

  console.log("Current Score : ", score);
  console.log("----------------------");
}

var highscorers = [{
  name : "Akshay",
  score : 4
}
]

function printHighScore(highscorer) {
  console.log(highscorer.name + " " + highscorer.score);
} 


var questions = [{
  question : "Who wrote the avengers comic ? ",
  answer : "Stan Lee"
},
{
  question : "Who plays the role of Nick Fury ? ",
  answer : "Samuel L. Jackson"
},
{
  question : "Who is the general of Wakanda's Army ? ",
  answer : "Okoye"
},
{
  question : "What is the name of the suit of Pepper Potts ? ",
  answer : "Mark XLIX"
},
{
  question : "What is the name of sister of Nebula ? ",
  answer : "Gamora"
}]

for(var i=0;i<questions.length;i++) {
  play(questions[i].question,questions[i].answer);
}

console.log(chalk.bgMagenta("You scored : " + score));

console.log("\nLeaderboard : ")
for(var i=0;i<highscorers.length;i++) {
  printHighScore(highscorers[i]);
}

if(score > highscorers[0].score) {
  console.log(chalk.bgYellow("Congrats ! You have the highest score"));
}