'use strict';

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

let events = new Set(gameEvents.values());

gameEvents.delete(61);
console.log(gameEvents);

console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
    );
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for(let [prop, value] of gameEvents.entries()) {
    console.log(`${prop <= 45 ? "[FIRST HALF]" : "[Second HALF]"} ${prop} ${value}`)
} 