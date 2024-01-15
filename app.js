const firstNum = document.querySelector(".first-number");
const secondNum = document.querySelector(".second-number");
let answerInput = document.querySelector(".answer");
let score = document.querySelector(".score");
const btn = document.querySelector(".submit")

count = 0;

let randomQuestion1 = questionNum1();
let randomQuestion2 = questionNum2();

function questionNum1() {
 let randomNum1 = Math.floor(Math.random() * 100)
 firstNum.value = randomNum1;
 return randomNum1;
}

function questionNum2() {
 let randomNum2 = Math.floor(Math.random() * 100)
 secondNum.value = randomNum2;
 return randomNum2;
}

function checkAns() {
 
 const userAnswer = Number(answerInput.value)
 if(randomQuestion1 + randomQuestion2 === userAnswer) {
  count++
  score.innerText = "Score = " + count;
 } else {
  count = 0;
  score.innerText = "Score = 0, Try again"
 }

randomQuestion1 = questionNum1()
randomQuestion2 = questionNum2()
}

btn.addEventListener("click", ()=> {
 checkAns();
});

