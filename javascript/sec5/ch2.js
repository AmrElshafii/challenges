'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

for (let [i, name] of game.scored.entries()) {
    console.log(`goal ${i + 1}:${name}`);
}

let sum = 0;
for (let odd of Object.values(game.odds)) {
    sum += odd;
}
let agrv = sum / Object.keys(game.odds).length;
console.log(agrv);

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

let scored = {}

for (let i = (game.scored.length - 1); i >= 0; i-- ) {
    let name = game.scored[i];
    console.log(name)
    let goals = 0;
    for (let i = 0; i < game.scored.length ; i++) {
        goals += name === game.scored[i] ? 1 : 0;
    }
    scored[name] = goals;
}

console.log(scored);