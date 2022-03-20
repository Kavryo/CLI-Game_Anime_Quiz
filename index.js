var readLineSync = require("readline-sync");
//const chalk = require("chalk");

//define score var
var score = 0
var userName = readLineSync.question("What is your lovely name? " + "\n")
console.log("Hey " + userName + "! Welcome to HOW MUCH DO YOU KNOW KAVYA? \n")
var players = [
  {
    playerName: "Kavya",
    Score: 5
  }
]
//prepare list of questions
var questions = [
 {
  question: "Who is Boruto's father?",
  answer: "Naruto"
 },
 {
  question: "Who is Gon's best friend in HxH",
  answer: "Killua"
 },
 {
  question: "Who is Yuji's preference in girls in JJK?",
  answer: "Jennifer Lawrence"  
 },
 {
  question: "Who is strongest of them all in JJK",
  answer: "Gojou Satoru"  
 },
 {
  question: "IS lelouch still alive in Code Geass?",
  answer: "yes"  
 }
]

function play(question,answer)
{
  var userAnswer = readLineSync.question(questions[i].question + "\n")
  if(userAnswer.toUpperCase() === questions[i].answer.toUpperCase())
    {
      console.log("\ncorrect! \n")
      score++
    }
  else
    {
      console.log("\nincorrect! \n")
    }
  
  //show score at end
}

for(i = 0; i < questions.length; i++)
  {
    play(questions[i].question,questions[i].answer)
  }
console.log("Your score is: " + score + "\n")

console.log("******** Highest Score ******** \n")

for( i = 0; i < players.length; i++)
  {
    console.log("Player : " + players[i].playerName + "\n" + "Score : " + players[i].Score + "\n");
  }