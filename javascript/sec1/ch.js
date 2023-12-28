const bill = 200;
const tips = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`the bill equal ${bill} and the tips equal ${tips}`);