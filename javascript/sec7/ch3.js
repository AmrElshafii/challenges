let Julia = [5, 2, 4, 1, 15, 8, 3];
let Kate =  [16, 6, 10, 5, 6, 1, 4];
let cats_age = Julia.concat(Kate);

let calcAverageHumanAge = 
array => 
    {
        let theNew = array.map(elem => elem <= 2 ? 2 * elem : 16 + elem * 4)
        .filter(elem => elem >= 18)
        let sum = theNew.reduce(((acc, curr) => acc + curr),0)
        return sum / theNew.length
    }
        
console.log(calcAverageHumanAge(Julia), calcAverageHumanAge(Kate));