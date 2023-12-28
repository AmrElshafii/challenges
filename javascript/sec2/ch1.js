// coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 2;
const checkWinner = (avgDolphins, avgKoalas) => avgDolphins > 2 * avgKoalas ? `the winners are the dolphins` : avgKoalas > 2 * avgDolphins ? `the winners are koalas` : `there is no winner`;

console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(1, 4, 9)));


// coding Challenge #4
let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
let tips = []
let totals = []
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}
for (let i = 0; i < bill.length; i++) {
    tips[i] = calcTip(bill[i]);
    totals[i] = tips[i] + bill[i];
}

console.log(
`bills are : ${bill}
tips are : ${tips}
totals are : ${totals}
`)