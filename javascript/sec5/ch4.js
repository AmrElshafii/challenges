'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

let textarea = document.querySelector('textarea');
let button = document.querySelector('button');

document.body.style.display = "flex"
document.body.style.justifyContent = "center"
document.body.style.alignItems = "start"
button.style.background = "blue"
button.innerHTML = "click"
button.addEventListener('click', function() {
    let str = []
    let final = ""
    let text = textarea.value.split("\n");
    for(let i = 0; i < text.length; i++) {
        let outtext = []
        text[i] = text[i].trim();
        text[i] = text[i].toLowerCase();
        let arr = text[i].split("_");
        // console.log(arr)
        // outtext[i] = arr[0] + arr[1][0].toUpperCase() + arr[1].slice(1);
        for(let j = 0; j < arr.length; j++) {
            j == 0 ? outtext[j] = arr[j] : outtext[j] = arr[j][0].toUpperCase() + arr[j].slice(1);
            console.log(outtext)
        }
        // console.log(str)
        str[i] = outtext.join().replaceAll("," , "")
        // console.log(str)
    }
    for(let i = 0; i < str.length; i++) {
        final = final + str[i] + "\n"
    }
    textarea.value = final;
})
