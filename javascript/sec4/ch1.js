// defines the elements
let guess = document.querySelector(".guessNum");
let again = document.querySelector(".again");
let check = document.querySelector("#check");
let stat = document.querySelector(".stat");
let scoreNum = Number(document.querySelector(".scoreNum").innerHTML);
let score = document.querySelector(".scoreNum");
let highscore = document.querySelector(".highNum");
let highNum = Number(document.querySelector(".highNum").innerHTML);

// define the variables
let guessNum = Math.floor(Math.random() * 20);
// console.log(score)
// 
check.addEventListener("click", function () {
    let number = Number(document.querySelector("#number").value);
    // when right
    if (scoreNum > 0) {
        if (number == guessNum) {
            guess.innerHTML = guessNum;
            stat.innerHTML = "Great right number";
            highNum < scoreNum ? highNum = scoreNum : ""
            highscore.innerHTML = highNum;
            console.log(highNum, highscore)
        }
        else {
            scoreNum -= 1;
            score.innerHTML = scoreNum;
            number > guessNum ? stat.innerHTML = "too high" 
            : number < guessNum ? stat.innerHTML = "too low" 
            : stat.innerHTML = "put a number";
        }
    }
});

again.addEventListener("click", function () {
    score.innerHTML = 20;
    scoreNum = 20;
    stat.innerHTML = "start guessing....";
    guess.innerHTML = "?"
    document.querySelector("#number").value = "";
    guessNum = Math.floor(Math.random() * 20);
});