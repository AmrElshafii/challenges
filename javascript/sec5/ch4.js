'use strict';

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
  ]);
  // console.log(question);
  
  // Convert object to map
  
  // Convert map to array
  console.log([...question]);
  // console.log(question.entries());
  console.log(...question.keys());
  console.log(...question.values());