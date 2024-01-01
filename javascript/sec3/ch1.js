const arr = [17, 21, 23];
const printForecast = (temp, day) => `${temp}ºC in ${day + 1} days`;

function print (arr) {
    let text = "";
    for (let i = 0; i < arr.length; i++) {
        text += (printForecast(arr[i], i) + " ");
    }
    return text;
}

console.log(print(arr));