let Julia = [3, 5, 2, 12, 7] 
let Kate = [4, 1, 15, 8, 3]
let corrected_julia = Julia.slice(1, -2)

let checkDogs = function(arr1, arr2) {
    let arr = arr1.concat(arr2);
    arr.forEach(function(element, index) {
        element >= 3 ? console.log(`"Dog number ${index} is an adult, and is ${element} years old`) : console.log(`Dog number ${index} is still a puppy `);
    });
}

checkDogs(corrected_julia, Kate)