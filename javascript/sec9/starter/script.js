'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// let renderCountry = function(data, className = '') {
//     let population = (+data.population / 1_000_000).toFixed(1) > 1 ? `${(+data.population / 1_000_000).toFixed(1)}M` : data.population
//     let flag = data.flags.svg
//     let name = data.name.official
//     let lang = data.languages ? Object.entries(data.languages)[0][1] : 'unknown'
//     if(name == 'State of Israel') {
//         flag = null
//         name = null
//         population = null 
//     }
//     let html = `        <article class="country ${className}">
//         <img class="country__img" src="${flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${population}</p>
//                 <p class="country__row"><span>🗣️</span>${lang}</p>
//             </div>
//         </article>`
//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1
// }

// let displayCountry = function(country) {
//     let request = new XMLHttpRequest()
//     request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`)
//     request.send()
//     request.addEventListener('load', function() {
//         let data = JSON.parse(this.responseText)[0]
//         renderCountry(data)
//         // render neighbour
//         let neighbour = data.borders[0] !== 'ISR' ? data.borders[0] : data.borders[1]
//         if(!neighbour) return
//         let request2 = new XMLHttpRequest()
//         request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
//         request2.send()
//         request2.addEventListener('load', function() {
//             let data2 = JSON.parse(this.responseText)
//             renderCountry(data2, 'neighbour')
//         })
//     })
// }

// let displayCountries = function() {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(request => request.json())
//     // .then(data => console.log(data.forEach(data => console.log(data))))
//     .then(data => data.forEach(country => renderCountry(country)))
//     .catch(error => console.error(error))

// }
// displayCountries()

// coding challenge 1
// let renderCountry = function(data, className = '') {
//     let population = (+data.population / 1_000_000).toFixed(1) > 1 ? `${(+data.population / 1_000_000).toFixed(1)}M` : data.population
//     let flag = data.flag
//     let name = data.name
//     let lang = data.languages[0].name
//     if(name == 'State of Israel') {
//         flag = null
//         name = null
//         population = null 
//     }
//     let html = `        <article class="country ${className}">
//         <img class="country__img" src="${flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${population}</p>
//                 <p class="country__row"><span>🗣️</span>${lang}</p>
//             </div>
//         </article>`
//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1
// }

// let displayCountry = function(country) {
//     fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(request => {
//         if (!request.ok) throw new Error('no request');
//         return request.json(); // Corrected here: make sure to return the json() call
//     })
//     .then(datae => {
//         let data = datae[0]
//         if(!data) throw new Error('no country found')
//         renderCountry(data)
//         return data
//     })
//     // .then((data) => {
//     //     let neighbour = data.borders[0] !== 'ISR' ? data.borders[0] : data.borders[1]
//     //     if(!neighbour) throw new Error('no neighbour found')
//     //     fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
//     //     .then(request => request.json())
//     //     .then(data => renderCountry(data, 'neighbour'))
//     // })
//     .catch(error => console.error(`seems to be an error here from the type: ${error.message}`))
// }

// // displayCountry('egypt')


// let whereAmI = function(lat, lng) {
//     // fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=684107854375818583640x93319`)
//     .then(request => {
//         // console.log(request)
//         if(!request.ok) throw new Error(`No country found. Status: ${response.status}`)
//         return request.json()
//     })
//     .then(data => {
//         if(!data) throw new Error('problem happened')
//         console.log(`You are in ${data.city}, ${data.country}`)
//         displayCountry(data.country)
//     })
//     .catch(error => console.error(error.message))
// }
// // navigator.geolocation.getCurrentPosition(function(location){
// //     let latitude, longitude
// //     latitude = location.coords.latitude
// //     longitude = location.coords.longitude
// //     whereAmI(latitude, longitude)   
// //     // whereAmI('latitude', 'longitude')   
// // }, function(){
// //     console.error("your location isn't aviliable" )
// // })
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);


// let wait = function(sec) {
//     return new Promise(function (resolve) { 
//         setTimeout(resolve, 1000 * sec)
//     })
// }

// // coding challenge 2
// let createImage = function(imgPath) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             let img = document.createElement('img')
//             img.setAttribute('src', imgPath)
//             img.addEventListener('load', resolve.bind(this, img))
//             img.addEventListener('error', reject.bind((this, new Error('the image failed to load'))))
//         }, 2000)
//     })
// }
// createImage('/sec9/starter/img/img-1.jpg')
// .then(img => {
//     img.classList.add('images')
//     document.querySelector('.images').append(img)
//     return img
// })
// .then(img => {
//     wait(2).then(res => {
//         img.style.display = 'none'
//         return createImage('/sec9/starter/img/img-2.jpg')
//     }).then(img2 => {
//     img2.classList.add('images')
//     document.querySelector('.images').append(img2)
//     return img2
//     })
//     .then(img2 => wait(2).then(() => img2.style.display = 'none'))
//     .catch(error => console.error(error))
// })
// .catch(error => console.error(error))

// coding challenge 3

let createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let img = document.createElement('img')
            img.setAttribute('src', imgPath)
            img.addEventListener('load', () => resolve(img));
            img.addEventListener('error', () => reject(new Error('The image failed to load')));
        }, 2000)
    })
}
let wait = function(sec) {
    return new Promise(function (resolve) { 
        setTimeout(resolve, 1000 * sec)
    })
}

// let loadNPause = async function(imgpath) {
//     try {
//         let img = await createImage(imgpath)
//         img.classList.add('images')
//         document.querySelector('.images').append(img)
//         await wait(2)
//         img.style.display = 'none'
//         await wait(2)
//         let img2 = await createImage('/sec9/starter/img/img-2.jpg')
//         img2.classList.add('images')
//         document.querySelector('.images').append(img2)
//         await wait(2)
//         img2.style.display = 'none'
//     } catch(err) {
//         console.error(err)
//     }
// }
// loadNPause('/sec9/starter/img/img-1.jpg')

let loadAll = async function(...imgArr) {
    try {
        let imgs = imgArr.map(async img => await createImage(img))
        let newImgs = await Promise.all(imgs)
        console.log(newImgs)
        newImgs.forEach(img => {
            document.querySelector('.images').append(img)
            img.classList.add('parallel')
        })
    }
    catch(err) {
        console.error(err.message)
    }
}

loadAll('/sec9/starter/img/img-1.jpg', '/sec9/starter/img/img-2.jpg', '/sec9/starter/img/img-3.jpg')