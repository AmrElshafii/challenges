'use strict'

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

let [players1 , players2] = game.players;
let [gk1, ...fieldPlayers1] = [...players1];
let [gk2, ...fieldPlayers2] = [...players2];
let allPlayers = [...players1, ...players2];
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
let {team1, x : draw, team2} = game.odds

function printGoals (...playerNames) {
    for(let i = 0; i < playerNames.length; i++) {
        console.log(playerNames[i], playerNames.length)
    }
}
printGoals(...players1);

team1 < team2 && console.log("team 1");
<<<<<<< HEAD
team1 > team2 && console.log("team 2");
=======
team1 > team2 && console.log("team 2");
>>>>>>> eacf36197f1734e6dd197377de24a908b8b30939
