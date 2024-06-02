const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];
console.log(dogs)

let check_nutrition = dog => 
    dog.curFood > dog.recommendedFood * 1.1 ? "ownersEatTooMuch" 
    : dog.curFood < dog.recommendedFood * 0.9 ? "ownersEatTooLittle" 
    : "dog eats good"

dogs.forEach(dog => dog.recommendedFood = dog.weight ** 0.75 * 28);
let sara_dog = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(check_nutrition(sara_dog))

let checker = mydogs => {
    let much = [], less = [], mild = []
    for(let dog of mydogs) {
        check_nutrition(dog) == 'ownersEatTooMuch' ? much.push(dog) : check_nutrition(dog) == 'ownersEatTooLittle' ? less.push(dog) : mild.push(dog);
    }
    return [much, less, mild]
}
let tooMuch = checker(dogs)[0].flatMap(dog => dog.owners);
let tooLittle = checker(dogs)[1].flatMap(dog => dog.owners);
let ok = checker(dogs)[2].flatMap(dog => dog.owners);

console.log(`${tooMuch.join(' and ')}  dogs eat too much! and ${tooLittle.join(' and ')}  dogs eat too little!`)
console.log(dogs.some(dog => dog.curFood == dog.recommendedFood))
console.log(ok.length ? true : false)

let dogs2 = dogs.slice().sort((dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood)
console.log(dogs2);
console.log(dogs)