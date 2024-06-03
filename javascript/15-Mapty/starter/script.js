'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
    #event;
    #map;
    constructor() {
        this.#getPosition()
        form.addEventListener('submit', this.#newWorkout.bind(this))
        inputType.addEventListener('change',this.#toggleElevationField)
    }

    #getPosition() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.#loadMap.bind(this), function() {
                alert('there is no location aviliable')
            })
        }
    }

    #loadMap(position) {
            let {latitude, longitude} = position.coords;
            // let longitude = position.coords.longitude;
            let currLocation = [latitude, longitude]
            // console.log(longitude, latitude)
            this.#map = L.map('map').setView(currLocation, 13);
    
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
    
            // L.marker(currLocation).addTo(map)
            //     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            //     .openPopup();
            
            this.#map.on('click', this.#showForm.bind(this))
        }

    #showForm(e) {
        this.#event = e
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    #toggleElevationField() {
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    }

    #newWorkout(e) {
        e.preventDefault()
        let {lat, lng} = this.#event.latlng;
        let chosenCord = [lat, lng];
        let stat = 'running-popup'
        let options = {
            maxWidth: 250,
            minWidth:  100,
            autoClose: false,
            closeOnClick: false,
            className: stat,
        }
        let popupContent = 'workout';
        L.marker(chosenCord).addTo(this.#map).bindPopup(L.popup(options)).setPopupContent(popupContent).openPopup()
    }
}
let app = new App()


