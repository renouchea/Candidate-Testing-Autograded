const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer ="";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers= [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: ");
//console.log(" Candidate's name:" + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0;i<questions.length;i++){
  let candidateRespone=input.question(`${questions[i]} Enter your answer:`);
  candidateAnswers.push(candidateRespone);
  //if (candidateAnswers[i]===correctAnswers) {
   // console.log("Your answer is correct.")
  //} else {console.log("Your answer is incorrect.")}
}

}
//askQuestion(); //i add up myself

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
    //for(let i=0;i<candidateAnswers.length;i++){
    //let result = ` Candidate:${candidateName} Cadidate's Answers: ${candidateAnswers[i]} Correct Answers: ${correctAnswers[i]}`;
    //console.log(result);
  //console.log (`Your respones are ${candidateAnswers} and the correct answers are ${correctAnswers}`);
  let correctCount = 0 
    for (let i = 0 ; i<candidateAnswers.length ; i++) { 
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
        correctCount++
      }
    }
      let grade = ((correctCount)/(questions.length))*100;
        if ( grade === 0 ){
          console.log (`Sorry ${candidateName}! You got all the wrong answers with score 0%.`)
        } else if (grade === 100){
          console.log ( `Congradulation ${candidateName}! You are passed with score 100%.`)
        } else if ( grade === 80) {
          console.log (`Congradulation ${candidateName}! You are passed with score 80%.`)
        } else if ( grade === 60) {
          console.log (`Sorry, ${candidateName}! You got three correct answers with score 60%.`)
        } else if ( grade === 40) {
        console.log (`Sorry, ${candidateName}! You got only two correct answers with score 40%.`)
        } else if ( grade === 20) {
        console.log (`Sorry, ${candidateName}! You got only one correct answers with score 20%.`)
        }
    //TODO 3.2 use this variable to calculate the candidates score.
       return grade;
    }
console.log(gradeQuiz(candidateAnswers));

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(" Hello," + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};