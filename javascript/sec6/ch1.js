const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function() {
    let str = this.question + "\n";
    for(let i = 0; i < this.options.length; i++) {
        str = str + this.options[i] + "\n";
    }
    let ans = prompt(str);
    ans.match(/^[0-3]$/) ? this.answers[Number(ans)]++ : console.log("wrong input");
    this.displayResults(this.answers);
}

poll.displayResults = function(str) {
    Array.isArray(str) ? console.log(str) : console.log("Poll results : " + str); 
}

let button = document.querySelector('button') 
button.addEventListener('click', poll.registerNewAnswer.bind(poll))
