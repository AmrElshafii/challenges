// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// // let [a, , , , e] = [...myNumbers]
// let [a, , , , e] = myNumbers

// console.log(a * e); // 5

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here
// let [a, b, c, [d, e, [f, g]]] = mySkills

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// // Write Your Destructuring Assignment Here
// let [, a, b] = arr3;
// let [c] = arr1;

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed

// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
  
//   // Write Your Destructuring Assignment Here
//   let {age : a, working : w, country : c, hobbies : [h1, ,h3]} = member;
  
//   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//   // My Age Is 30 And Iam Not Working
  
//   console.log(`I Live in ${c}`);
//   // I Live in Egypt
  
//   console.log(`My Hobbies: ${h1} And ${h3}`);
//   // My Hobbies: Reading And Programming

// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//       "Oath In Felghana": ["USA", "Japan"],
//       "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//       },
//       Origin: "30 USD",
//     },
//   };
  
//   // Write Your Destructuring Assignment/s Here
//   let [t, d] = Object.values(game);
//   let [[u, j], {US : u_price, JAP : j_price}, or] = Object.values(game.releases);
//   let [o, a] = Object.keys(game.releases)
  
//   console.log(`My Favourite Games Style Is ${t} Style`);
//   // My Favourite Games Style Is YS Style
  
//   console.log(`And I Love ${d} Games`);
//   // And I Love Falcom Games
  
//   console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
//   // My Best Release Is Oath In Felghana It Released in USA & Japan
  
//   console.log(`Although I Love ${a}`);
//   // Although I Love Ark Of Napishtim
  
//   console.log(`${a} Price in USA Is ${u_price}`);
//   // Ark Of Napishtim Price in USA Is 20 USD
  
//   console.log(`${a} Price in Japan Is ${j_price}`);
//   // Ark Of Napishtim Price in Japan Is 10 USD
  
//   console.log(`Origin Price Is ${or}`);
//   // Origin Price Is 30 USD


// let chosen = 3;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// // Write Your Code Here
// for (let [property, value] of Object.entries(myFriends[chosen - 1]))
// {
//     let str = 
//     property === "available" && value === false 
//     ? "Not Available" 
//     : property === "available" 
//     ? "Available" 
//     : property === "skills" 
//     ? value[1]
//     : value
//     console.log(str)
// }


// // If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"